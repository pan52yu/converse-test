<script>
import "/public/dist/converse.min.js"
import "/public/dist/converse.css"
export default {
  name: "ChatComponent",
  mounted() {
    converse.initialize({
        authentication: 'login', // 身份验证方式 login
        auto_away: 300, // 5分钟后自动离开
        auto_reconnect: true, // 自动重连
        bosh_service_url: 'https://conversejs.org/http-bind/', // BOSH 服务地址 请仅将此连接管理器用于测试目的
        // bosh_service_url: 'http://herons.top:5280/bosh', // BOSH 服务地址
        show_controlbox_by_default: true, // 显示控制台
        message_archiving: 'always', // 消息存档
        view_mode: 'fullscreen', // 全屏模式
        // websocket_url: 'http://herons.top:5280/ws', // websocket 服务地址
    });
  }
}
</script>

<template>
<div id="conversejs-bg"></div>
</template>

<style scoped>

</style>
