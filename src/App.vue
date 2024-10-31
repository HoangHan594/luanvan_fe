<!-- <template>
  <div>
    <AppHeader /> 
    <div id="app">
      <router-view />
      là một thẻ placeholder mà Vue Router sử dụng để render nội dung của các route trong ứng dụng Vue.js của bạn. 
    </div>
  </div>
</template>

<script>

export default {
  components: {
  },
};
</script> -->
<template>
  <div>
    <div id="app">
      <h1>API Target: {{ apiTarget }}</h1> <!-- Hiển thị API Target -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dbStatus: 'unknown',
      apiTarget: process.env.API_TARGET, // Lấy API Target từ biến môi trường
    };
  },
  methods: {
    async checkDatabaseConnection() {
      try {
        const response = await fetch(this.apiTarget); // Sử dụng apiTarget để kiểm tra kết nối
        const data = await response.json();

        if (data.database === 'connected') {
          this.dbStatus = 'Connected';
          console.log('Connected to database');
        } else {
          this.dbStatus = 'Not Connected';
          console.warn('Database is not connected');
        }
      } catch (error) {
        this.dbStatus = 'Error';
        console.error('Error connecting to database:', error);
      }
    },
  },
  mounted() {
    this.checkDatabaseConnection();
  },
};
</script>

