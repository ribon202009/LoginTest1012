<template>
  <v-app bar color="primary" dark >
   <v-card  width="400px" class="mx-auto mt-5">
    <v-card-title>
      <h1 class="display-1">ログイン</h1>
    </v-card-title>
 

  <v-card-text>

      <v-form>
        <v-text-field prepend-icon="mdi-account-circle" label="ユーザ名" />
        <v-text-field v-bind:type="showPassword ? 
        'text' : 'password'" prepend-icon="mdi-lock" 
        v-bind:append-icon="showPassword ? 
        'mdi-eye' : 'mdi-eye-off'" label="パスワード"
         @click:append="showPassword = !showPassword" />
      </v-form>
       
        <v-card-actions>
         <v-btn class="info">ログイン</v-btn>
        </v-card-actions>
     
  </v-card-text>  

   </v-card>  
</v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    showPassword : false
  }),
};
</script>
