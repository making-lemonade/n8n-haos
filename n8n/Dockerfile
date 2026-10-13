ARG N8N_VERSION=2.42.7
FROM docker.n8n.io/n8nio/n8n:${N8N_VERSION}

COPY ha-entrypoint.cjs /usr/local/bin/ha-entrypoint.cjs

ENTRYPOINT ["node", "/usr/local/bin/ha-entrypoint.cjs"]
CMD ["start"]
