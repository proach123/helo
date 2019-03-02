insert into userz (username, password,  user_img)
values (${username},${password},'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg')
returning id, username, user_img