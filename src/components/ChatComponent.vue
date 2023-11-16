<script>
import "/public/dist/converse.js"
import "/public/dist/converse.css"
export default {
  name: "ChatComponent",
  mounted() {
    converse.initialize({
        authentication: 'login', // 身份验证方式 login
        auto_away: 300, // 5分钟后自动离开
        auto_reconnect: true, // 自动重连
        bosh_service_url: 'https://conversejs.org/http-bind/', // Please use this connection manager only for testing purposes
        message_archiving: 'always', // 消息存档
        view_mode: 'fullscreen' // 全屏模式
    });
  }
}
</script>

<template>
<div id="conversejs-bg"></div>
</template>

<style scoped>

</style>
