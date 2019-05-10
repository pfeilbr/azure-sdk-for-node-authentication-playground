# azure-sdk-for-node-authentication-playground

learn authentication methods for azure sdk for nodejs

## Service Principal Authentication

 > Based on [azure-sdk-for-node/Documentation/Authentication.md](https://github.com/Azure/azure-sdk-for-node/blob/master/Documentation/Authentication.md#service-principal-authentication)


1. `clientId`, `secret`, and `domain` are defined in `.env`.  Copy [`.env.sample`](.env.sample) to `.env` and populate with values via the following steps.
1. getting `clientId` and `domain`
    
    run `az ad sp list`

    ![](https://www.evernote.com/l/AAHU6ONDbO1KYIVV93m8-xaJWKd4r3SolgoB/image.png)

1. getting / creating secret

    navigate to **Portal | Azure Active Directory | App registrations**
    create new client secret if needed OR use existing
    ![](https://www.evernote.com/l/AAHlB4MduMBFjadlw1JlXT6hfMVn5OBBSIwB/image.png)