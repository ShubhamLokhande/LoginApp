<template>
  <view class="container">
      <nb-card-item avatar>
        <nb-left class="customImage">
          <nb-thumbnail class="customRoundedImage" :source="require('../../assets/profile.jpg')" />
        </nb-left>
        <nb-body class="customText">
          <nb-text class="title">John Doe</nb-text>
          <nb-text note class="caption">@j_dove</nb-text>
        </nb-body>
      </nb-card-item>
      <view class="userInfoSection">
        <IconText icon="map-marker-radius" text="Kolkata, India"/>
        <IconText icon="phone" text="+91 9000090000"/>
        <IconText icon="email" text="john_doe@gmail.com"/> 
      </view>
      <view class="infoBoxWrapper">
        <view class="infoBox" :style="{borderRightColor:'#dddddd', borderRightWidth: 1}">
          <nb-text class="boxText">$140</nb-text>
          <nb-text note>Wallet</nb-text>
        </view>
        <view class="infoBox">
          <nb-text class="boxText">12</nb-text>
          <nb-text note>Order</nb-text>
        </view>
      </view>
      <view>
        <nb-list class="userInfoSection">
          <IconText class="menuitem" icon="heart-outline" text="Your Favourites" color="#ff6347"/>
          <IconText class="menuitem" icon="credit-card-outline" text="Payment" color="#ff6347"/>
          <IconText class="menuitem" icon="share-outline" text="Tell Your Friend" color="#ff6347"/>
          <IconText class="menuitem" icon="account-check-outline" text="Support" color="#ff6347"/>
          <IconText class="menuitem" icon="settings-outline" text="Settings" color="#ff6347"/>
        </nb-list>
      </view>
  </view>
</template>

<script>
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
} from 'react-native-paper'

export default {

}
</script>

<style scoped>
.container{
  flex: 1;
  margin-top: 15;
}
.customImage{
  margin-right: -150;
}
.customText{
  margin-top: 17;
}
.customRoundedImage{
  width: 90px;
  height: 90px;
  border-radius: 100;
}
.userInfoSection{
  padding-left: 20;
  margin-bottom: 25;
  margin-top: 15;
}
.title{
  font-size: 20;
  font-weight: bold;
  padding-bottom: 5;
}
.caption{
  font-size: 14;
  line-height: 14;
  font-weight: 500;
}

.infoBoxWrapper{
  border-bottom-color: #dddddd;
  border-bottom-width: 1;
  border-top-color: #dddddd;
  border-top-width: 1;
  flex-direction: row;
  height: 100;
}
.infoBox{
  width: 50%;
  align-items: center;
  justify-content: center;
}
.boxText{
  font-size: 23;
  margin-bottom: 5;
}
.menuWrapper{
  margin-top: 10;
}
.menuitem{
  flex-direction: row;
  padding: 10px;
}
.menuItemText{
  color: #777777;
  margin-left: 20;
  font-weight: 600;
  font-size: 16;
  line-height: 26;
}
</style>