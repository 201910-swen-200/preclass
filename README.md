Preclass Repository
------------

This is just some files to help folks get started

To build the docker container:

docker build -t preclass .


To run the code:

docker run --rm -it run -v "$PWD":/work -v /work/node_modules preclass ./node_modules/.bin/ts-node filename



