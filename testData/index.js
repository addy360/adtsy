export const categories = (items) => {
  const imgs = [
    "https://th.bing.com/th/id/OIP.MsNU6jQ9-g5bPckfhJb4NQHaHa?pid=ImgDet&rs=1",
    "https://i.pinimg.com/originals/ac/d9/1d/acd91d4e552dcd4ccaf509eaaa1eac00.jpg",
    "https://th.bing.com/th/id/R1a92e74448366df1f5d4edf554daad3d?rik=Zb9KQ0Y05zDPvg&riu=http%3a%2f%2fstocks.org%2fwp-content%2fuploads%2f2014%2f09%2fsamsung-new-gadget-642x336.jpg&ehk=bQltezjV6Eaffld0ePfec1C8VN%2fKJBUyEOP5TZ6bGUY%3d&risl=&pid=ImgRaw",
    "https://usgadgetsclub.com/wp-content/uploads/2020/07/images-29.jpeg",
    "https://th.bing.com/th/id/Rceebcbadc58152cfd69ec83bc1add37b?rik=xeHA%2bqa9rTDOQg&riu=http%3a%2f%2fsclick.net%2fcool+gadgets%2fnewest-fun-cool-high-tech-gadget%2f15%2ftop-coolest-best-latest-new-fun-gadgets-gift-unusual_devices_34.jpg&ehk=sQymZX5iH6fmJsDE%2fRIjY1r83wALOBnJvYn4rjZ4Erk%3d&risl=&pid=ImgRaw",
    "https://www.assignmentpoint.com/wp-content/uploads/2014/10/ssssssdddd.jpg",
  ];
  return imgs.map((img, i) => ({
    categoryId: i + 1,
    categoryName: `Category ${i + 1}`,
    categoryImg: img,
  }));
};

export const users = () => {
  return [
    {
      name: "Jane Doe",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
      subtitle: "Vice President",
    },
    {
      name: "John Doe",
      avatar_url:
        "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg",
      subtitle: "Vice Chairman",
    },
  ];
};
