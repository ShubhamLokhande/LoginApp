<template>
  <nb-container>
    <nb-header>
      <nb-body>
        <nb-title class="textCenter">{{title}}</nb-title>
      </nb-body>
    </nb-header>
    <nb-content padder>
      <nb-form>
        <InputWithError :error="$v.form.name.$dirty && !$v.form.name.required"
                        msg="Name is required">
          <nb-input v-model="form.name"
                    placeholder="Full Name" 
                    auto-capitalize="none" 
                    :on-blur="() => $v.form.name.$touch()"/>
        </InputWithError>
        <InputWithError :error="$v.form.email.$dirty && !$v.form.email.isValidEmail"
                        msg="Email format is not valid!">
          <nb-input v-model="form.email"
                    placeholder="Email" 
                    auto-capitalize="none"
                    :on-blur="() => $v.form.email.$touch()"/>
        </InputWithError>
        <InputWithError :error="$v.form.avatar.$dirty && !$v.form.avatar.required"
                        msg="Avatar is required">
          <nb-input v-model="form.avatar"
                    placeholder="Avatar Url" 
                    auto-capitalize="none"
                    :on-blur="() => $v.form.avatar.$touch()"/>
        </InputWithError>
        <InputWithError :error="$v.form.password.$dirty && !$v.form.address.minLength"
                        msg="Minimum length is 5 characters!">
          <nb-input v-model="form.address"
                    placeholder="Address" 
                    auto-capitalize="none"
                    :on-blur="() => $v.form.address.$touch()"/>
        </InputWithError>
        <InputWithError :error="$v.form.password.$dirty && !$v.form.password.required"
                        msg="Password is required">
          <nb-input v-model="form.password"
                    placeholder="Password" 
                    auto-capitalize="none" 
                    secure-text-entry
                    :on-blur="() => $v.form.password.$touch()"/>
        </InputWithError>
        <InputWithError :error="$v.form.passwordConfirm.$dirty && !$v.form.passwordConfirm.sameAsPassword"
                        msg="Password confirmation needs to be same as Password">
          <nb-input v-model="form.passwordConfirm"
                    placeholder="Password Confirmation" 
                    auto-capitalize="none"
                    :on-blur="() => $v.form.passwordConfirm.$touch()"/>
        </InputWithError>
      </nb-form>
      <view :style="{marginTop:10}">
        <nb-button block :on-press="register">
          <nb-text>Register</nb-text>
        </nb-button>
        <nb-button transparent :on-press="goToLogin">
          <nb-text>Already Registered? Login here</nb-text>
        </nb-button>
      </view>
    </nb-content>
  </nb-container>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators' 

export default {
  props:{
    navigation:{
      type:Object
    }
  },
  data(){
    return{
      title:"Register",
      form:{
        name:'',
        email:'',
        avatar:'',
        address:'',
        password:'',
        passwordConfirm:''
      }
    }
  },
  validations:{
    form:{
      name:{ required },
      email:{ isValidEmail: email },
      avatar:{ required },
      address:{ minLength: minLength(5) },
      password:{ required },
      passwordConfirm:{ sameAsPassword: sameAs('password') }
    }
  },
  methods:{
    register(){
      this.$v.form.$touch
      if(!this.$v.form.$invalid){
        this.$store.dispatch('users/registerUser', this.form)
          .then(check => {
            alert(check)
            if(check){
              this.goToLogin()
            }
          })
      }
    },
    goToLogin(){
      this.navigation.navigate('Login')
    }
  }
}
</script>

<style scoped>
.textCenter{
  align-self: center;
}
</style>