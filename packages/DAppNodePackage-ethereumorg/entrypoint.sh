#!/bin/bash -x

set -e

source ~/.nvm/nvm.sh
GODEBUG="netdns=go"

IPFS_BIN=/usr/local/bin/ifps
## Download IPFS binary
if [[ ! -f "$IPFS_BIN" ]]; then
    wget https://dist-ipfs-tech.ipns.dweb.link/kubo/v0.14.0/kubo_v0.14.0_linux-amd64.tar.gz -O kubo.tar.gz
    tar -xzvf kubo.tar.gz
    kubo/install.sh
    rm kubo.tar.gz
    rm -rf kubo
fi

# Download ethereum.org repository
[ ! -d "./webpage_repo" ] && git clone ${ETHEREUM_ORG_REPO} webpage_repo
cd webpage_repo/${ETHEREUM_ORG_PATH}

# Build ethereum.org
npm i -g yarn
yarn
yarn build
cd public
# Loop all the dictories into the current folder that contains the file 404.html and delete them except "en"
for dir in */; do
    # if contains 404.html and it's not "en" delete it
    if [ -f "$dir/404.html" ] && [ "$dir" != "en/" ]; then
        echo "Removing $dir"
        rm -rf $dir
    fi
done

ipfs --api=/dns/ipfs.dappnode/tcp/5001 add -p -r . --quiet | tee ../listHashesBuild

IPFS_HASH_BUILD=$(tail -1 ../listHashesBuild)
IPFS_HASH_CODED=$(ipfs cid base32 $IPFS_HASH_BUILD)
echo "http://${IPFS_HASH_CODED}.ipfs.ipfs.dappnode:8080/en"

curl    --connect-timeout 5 \
        --max-time 10 \
        --retry 5 \
        --retry-delay 0 \
        --retry-max-time 40 \
        -X POST "http://my.dappnode/data-send?key=IPFS_URL&data=http://${IPFS_HASH_CODED}.ipfs.ipfs.dappnode:8080/en" \
        || { echo "[ERROR] failed to post the UI_IPFS_HASH IPFS to dappmanager"; }

yarn start
