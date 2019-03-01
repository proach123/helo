insert into userz (username, password,  user_img)
values (${username},${password},0,'https://img.icons8.com/dusk/64/000000/picture.png')
returning id, username, user_img