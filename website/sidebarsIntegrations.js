module.exports = {
    integrations: [
        {
            type: "doc",
            id: "index",
        },
        {
            type: "category",
            label: "Applications",
            items: [
                "services/apache-guacamole/index",
                "services/aws/index",
                "services/awx-tower/index",
                "services/bookstack/index",
                "services/budibase/index",
                "services/fortimanager/index",
                "services/gitea/index",
                "services/gitlab/index",
                "services/grafana/index",
                "services/harbor/index",
                "services/hashicorp-vault/index",
                "services/hedgedoc/index",
                "services/home-assistant/index",
                "services/matrix-synapse/index",
                "services/minio/index",
                "services/nextcloud/index",
                "services/onlyoffice/index",
                "services/opnsense/index",
                "services/paperless-ng/index",
                "services/pfsense/index",
                "services/pgadmin/index",
                "services/portainer/index",
                "services/powerdns-admin/index",
                "services/proxmox-ve/index",
                "services/rancher/index",
                "services/rocketchat/index",
                "services/roundcube/index",
                "services/sentry/index",
                "services/sssd/index",
                "services/sonarr/index",
                "services/tautulli/index",
                "services/ubuntu-landscape/index",
                "services/uptime-kuma/index",
                "services/veeam-enterprise-manager/index",
                "services/vikunja/index",
                "services/vmware-vcenter/index",
                "services/wekan/index",
                "services/wiki-js/index",
                "services/wordpress/index",
                "services/zabbix/index",
                "services/zulip/index",
            ],
        },
        {
            type: "category",
            label: "Federation & Social login",
            items: [
                "sources/index",
                "sources/active-directory/index",
                "sources/apple/index",
                "sources/azure-ad/index",
                "sources/discord/index",
                "sources/freeipa/index",
                "sources/github/index",
                "sources/google/index",
                "sources/ldap/index",
                "sources/mailcow/index",
                "sources/oauth/index",
                "sources/plex/index",
                "sources/saml/index",
            ],
        },
    ],
};
