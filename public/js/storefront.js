const groceries = [
  {
    title: 'Apples',
    description: `An apple is a round, edible fruit produced by an apple tree.`,
    price: '$0.59/lb',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/330px-Pink_lady_and_cross_section.jpg'
  },
  {
    title: 'Pear',
    description: `Pears are fruits produced and consumed around the world, growing on a tree and harvested in late summer into mid-autumn.`,
    price: '$0.89/lb',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pears.jpg/330px-Pears.jpg'
  },
  {
    title: 'Strawberry',
    description: `The garden strawberry (or simply strawberry; Fragaria × ananassa)[1] is a widely grown hybrid species of the genus Fragaria, collectively known as the strawberries, which are cultivated worldwide for their fruit.`,
    price: '$1.89/lb',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/330px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg'
  },
  {
    title: 'Grape',
    description: `A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters.`,
    price: '$0.30/lb',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Abhar-iran.JPG/255px-Abhar-iran.JPG'
  },
  {
    title: 'Graham cracker',
    description: `Graham cracker crumbs are used to create graham cracker crusts for fruit pies and moon pies, and as a base, layer or topping for cheesecake.`,
    price: '$1.51/box',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Graham-Cracker-Stack.jpg/330px-Graham-Cracker-Stack.jpg'
  },
  {
    title: 'Sushi',
    description: `Sushi is traditionally made with medium-grain white rice, though it can be prepared with brown rice or short-grain rice. It is very often prepared with seafood, such as squid, eel, yellowtail, salmon, tuna or imitation crab meat.`,
    price: '$4.51/box',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg/330px-Various_sushi%2C_beautiful_October_night_at_midnight.jpg'
  },
  {
    title: 'Pizza',
    description: `A small pizza is sometimes called a pizzetta. A person who makes pizza is known as a pizzaiolo.`,
    price: '$3.51/slice',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/330px-Pizza-3007395.jpg'
  },
  {
    title: 'Banana',
    description: `A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.`,
    price: '$0.51/lb',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Banana_and_cross_section.jpg/375px-Banana_and_cross_section.jpg'
  },
  {
    title: 'Carrot',
    description: `The carrot (Daucus carota subsp. sativus) is a root vegetable, typically orange in color, though purple, black, red, white, and yellow cultivars exist,[2][3][4] all of which are domesticated forms of the wild carrot, Daucus carota, native to Europe and Southwestern Asia.`,
    price: '$0.31/lb',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Vegetable-Carrot-Bundle-wStalks.jpg/330px-Vegetable-Carrot-Bundle-wStalks.jpg'
  },
  {
    title: 'Apricot',
    description: `Apricots are species belonging to Prunus sect.`,
    price: '$0.21/lb',
    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apricot_and_cross_section.jpg/330px-Apricot_and_cross_section.jpg'
  }
];

window.onload = () => {
  const groceryCards = document.getElementById('grocery-cards');

  groceries.forEach(grocery => {
      const column = document.createElement('div');
      column.classList.add('col-lg-4', 'mb-3'); 

      const card = document.createElement('div');
      card.classList.add('card');
      card.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)"; 
      card.style.backgroundColor = "rgba(255, 255, 255, 0.8)"; 

      const img = document.createElement('img');
      img.src = grocery.photoURL;
      img.classList.add('card-img-top');
      card.appendChild(img);

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const title = document.createElement('h5');
      title.textContent = grocery.title;
      title.classList.add('card-item-text'); /* Assign the new class */
      title.style.marginBottom = "0";
      cardBody.appendChild(title);

      const description = document.createElement('p');
      description.textContent = grocery.description;
      description.classList.add('card-item-text'); /* Assign the new class */
      description.style.marginTop = "0";
      cardBody.appendChild(description);

      const price = document.createElement('p');
      price.textContent = `Price: ${grocery.price}`;
      price.classList.add('card-item-text'); /* Assign the new class */
      cardBody.appendChild(price);

      card.appendChild(cardBody);
      column.appendChild(card);
      groceryCards.appendChild(column);
  });
};