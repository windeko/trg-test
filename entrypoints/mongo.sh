#!/bin/bash

set -e

host="mongo"
port="27017"
cmd="$@"

apk --no-cache add curl

>&2 echo "!!!!!!!! Check mongo for available !!!!!!!!"

until curl http://"$host":"$port"; do
  >&2 echo "mongo is unavailable - sleeping"
  sleep 1
done

>&2 echo "mongo is up - executing command"

exec $cmd
