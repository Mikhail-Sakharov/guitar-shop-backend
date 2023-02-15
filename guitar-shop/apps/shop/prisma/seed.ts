import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function fillDb() {
  await prisma.product.upsert({
    where: {id: 5027332426375},
    update: {},
    create: {
      authorId: '6398ab2b5a6c4e3fefe83772',
      title: 'Честер Bass',
      description: 'Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
      image: 'img/content/catalog-product-3.png',
      guitarType: 'электро',
      sku: '1675777475439',
      stringsCount: 4,
      rating: 2,
      price: 696625,
      reviewsCount: 0,
      reviews: {
        create: [
          {
            userName: 'Михаил',
            userId: '6398ab2b5a6c4e3fefe83771',
            productId: 5027332426375,
            advantages: 'Хороший корпус, чистый звук, стурны хорошего качества',
            disadvantages: 'Тугие колки',
            text: 'У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте нет чехла и ремня.',
            rating: 5
          },
          {
            userName: 'Ольга',
            userId: '6398ab2b5a6c4e3fefe83772',
            productId: 5027332426375,
            advantages: 'Хороший корпус, чистый звук, стурны хорошего качества',
            disadvantages: 'Тугие колки',
            text: 'У гитары отличный цвет, хороше дерево. Тяжелая, в компдлекте нет чехла и ремня.',
            rating: 5
          }
        ]
      }
    }
  });

  console.info('🤘️ Database was filled')
}

fillDb()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect()

    process.exit(1);
  })
