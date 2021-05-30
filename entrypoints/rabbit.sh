#!/bin/bash

set -e

host="rabbitmq"
port="15672"
cmd="$@"

apk --no-cache add curl

>&2 echo "!!!!!!!! Check rabbitmq for available !!!!!!!!"

until curl http://"$host":"$port"; do
  >&2 echo "rabbitmq is unavailable - sleeping"
  sleep 1
done

>&2 echo "rabbitmq is up - executing command"

exec $cmd
