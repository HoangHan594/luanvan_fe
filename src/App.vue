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
    <!-- <AppHeader /> -->
    <div id="app">
      <router-view />
      <!-- là một thẻ placeholder mà Vue Router sử dụng để render nội dung của các route trong ứng dụng Vue.js của bạn. -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dbStatus: 'unknown',
    };
  },
  methods: {
    async checkDatabaseConnection() {
      try {
        const response = await fetch('https://luanvan-1-kmlh.onrender.com');
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
