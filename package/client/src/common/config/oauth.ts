
/**
 * 第三方登录配置
 */
export const oauthDev = {
  github: {
    oauth_uri: 'https://github.com/login/oauth/authorize',
    accessPath: 'https://github.com/login/oauth/access_token',
    userPath: 'https://api.github.com/user',
    redirectUri: 'http://localhost:3000/login/',
    clientId: '00b6c38e8db6913a5017',
    clientSecret: '65dc13996e41df5ad57384e84d309fa88a0eb6bf'
  },
  gitee: {
    oauth_uri: 'https://gitee.com/oauth/authorize',
    accessPath: 'https://gitee.com/oauth/token',
    userPath: 'https://gitee.com/api/v5/user',
    redirectUri: 'http://localhost:3000/login/',
    clientId: '39aefd1833104e626a11eedef270650e6722a07e5ba3d5f7aeade645b9d5f3f8',
    clientSecret: '474d5b65d0a9348213c4c5f43185a555ab01871d7afaae2f955861522f9f983c'
  }
}
