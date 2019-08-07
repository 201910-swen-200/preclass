Preclass Repository
------------

This is just some files to help folks get started

To build the docker container:

docker build -t preclass .


To run the code:

docker run --rm -it -v "$PWD":/work -v /work/node_modules run ./node_modules/.bin/ts-node filename



