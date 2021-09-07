import _ from '@lodash';
import mock from '../mock';

const eCommerceDB = {
  products: [
    {
      id: '1',
      name: 'A Walk Amongst Friends - Canvas Print',
      handle: 'a-walk-amongst-friends-canvas-print',
      description:
        'Officia amet eiusmod eu sunt tempor voluptate laboris velit nisi amet enim proident et. Consequat laborum non eiusmod cillum eu exercitation. Qui adipisicing est fugiat eiusmod esse. Sint aliqua cupidatat pariatur mollit ad est proident reprehenderit. Eiusmod adipisicing laborum incididunt sit aliqua ullamco.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '1',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 9.309,
      priceTaxIncl: 10.24,
      taxRate: 10,
      comparedPrice: 19.9,
      quantity: 3,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '2',
      name: 'Braies Lake - Canvas Print',
      handle: 'braies-lake-canvas-print',
      description:
        'Duis anim est non exercitation consequat. Ullamco ut ipsum dolore est elit est ea elit ad fugiat exercitation. Adipisicing eu ad sit culpa sint. Minim irure Lorem eiusmod minim nisi sit est consectetur.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '2',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 22.381,
      priceTaxIncl: 24.62,
      taxRate: 10,
      comparedPrice: 29.9,
      quantity: 92,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '3',
      name: 'Fall Glow - Canvas Print',
      handle: 'fall-glow-canvas-print',
      description:
        'Sit ipsum esse eu consequat veniam sit consectetur consectetur anim. Ut Lorem dolor ullamco do. Laboris excepteur consectetur tempor nisi commodo amet deserunt duis.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '3',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 44.809,
      priceTaxIncl: 49.29,
      taxRate: 10,
      comparedPrice: 59.9,
      quantity: 60,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '4',
      name: 'First Snow - Canvas Print',
      handle: 'first-snow-canvas-print',
      description:
        'Incididunt nostrud culpa labore nostrud veniam nostrud dolore velit sunt laborum ad reprehenderit. Excepteur enim irure ut labore elit ut deserunt qui qui consequat quis do nostrud ad. Aliqua dolor labore ut occaecat laborum irure. Aute in deserunt do aute laborum sit et reprehenderit minim voluptate proident do est.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '4',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 62.827,
      priceTaxIncl: 69.11,
      taxRate: 10,
      comparedPrice: 79.9,
      quantity: 101,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: false,
    },
    {
      id: '5',
      name: 'Lago di Braies - Canvas Print',
      handle: 'lago-di-braies-canvas-print',
      description:
        'Laboris laborum minim qui reprehenderit duis fugiat ea anim labore incididunt duis. Officia adipisicing anim amet in sit aliqua fugiat quis do sint non velit eu. Labore occaecat labore elit voluptate Lorem adipisicing et ipsum id et reprehenderit ullamco. Elit in nulla laborum nulla quis dolor deserunt magna dolor ad anim magna. Esse aute reprehenderit anim sit est et quis est. Ex reprehenderit culpa deserunt qui sint eiusmod reprehenderit ipsum consequat ut.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '5',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 9.309,
      priceTaxIncl: 10.24,
      taxRate: 10,
      comparedPrice: 19.9,
      quantity: 19,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '6',
      name: 'Lago di Sorapis - Canvas Print',
      handle: 'lago-di-sorapis-canvas-print',
      description:
        'Tempor sunt tempor veniam non culpa excepteur. Ea irure elit non cupidatat cillum dolore. Sit incididunt qui dolore ipsum commodo aliqua amet cupidatat incididunt nisi qui consectetur. Cillum eu aute qui irure aute adipisicing cupidatat magna.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '6',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 53.963,
      priceTaxIncl: 59.36,
      taxRate: 10,
      comparedPrice: 69.9,
      quantity: 101,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '7',
      name: 'Never Stop Changing - Canvas Print',
      handle: 'never-stop-changing-canvas-print',
      description:
        'Excepteur commodo ipsum in ex esse elit ea id voluptate id occaecat. Sunt Lorem ipsum ut proident eu aliquip velit non minim. Sunt velit deserunt veniam eu non veniam. Eiusmod sit ex et id incididunt labore aliqua eu aute dolor cillum ex mollit mollit. Incididunt voluptate adipisicing eiusmod non ipsum cupidatat excepteur enim in pariatur eu. Labore dolor qui exercitation amet labore laboris Lorem do adipisicing. Minim non consectetur adipisicing esse ut occaecat incididunt eiusmod commodo et cillum pariatur.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '7',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 58.372,
      priceTaxIncl: 64.21,
      taxRate: 10,
      comparedPrice: 69.9,
      quantity: 34,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '8',
      name: 'Reaching - Canvas Print',
      handle: 'reaching-canvas-print',
      description:
        'Velit cillum cupidatat eiusmod ea quis sit. Consequat dolore elit sunt sunt voluptate irure incididunt consectetur non. Dolore veniam ipsum anim commodo ex. Proident ipsum nostrud ullamco sit. Ad dolore nulla qui mollit laborum ex ipsum.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '8',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 63.39,
      priceTaxIncl: 69.73,
      taxRate: 10,
      comparedPrice: 79.9,
      quantity: 4,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: false,
    },
    {
      id: '9',
      name: 'Morain Lake - Canvas Print',
      handle: 'morain-lake-canvas-print',
      description:
        'Consequat minim velit commodo Lorem ipsum velit elit amet ut. In deserunt id duis nisi labore. Proident cillum et reprehenderit excepteur ex nulla enim.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '9',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 52.154,
      priceTaxIncl: 57.37,
      taxRate: 10,
      comparedPrice: 59.9,
      quantity: 58,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '10',
      name: 'Yosemite - Canvas Print',
      handle: 'yosemite-canvas-print',
      description:
        'Proident do sunt dolor tempor aliquip adipisicing dolor reprehenderit officia proident. Culpa non reprehenderit velit anim consequat velit elit eu culpa quis incididunt id. Eu incididunt exercitation nostrud est mollit officia. Laboris deserunt dolore sit occaecat exercitation quis sunt sunt nisi commodo.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '9',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 62.18,
      priceTaxIncl: 68.4,
      taxRate: 10,
      comparedPrice: 69.9,
      quantity: 125,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '11',
      name: 'A Walk Amongst Friends - Canvas Print',
      handle: 'a-walk-amongst-friends-canvas-print',
      description:
        'Officia amet eiusmod eu sunt tempor voluptate laboris velit nisi amet enim proident et. Consequat laborum non eiusmod cillum eu exercitation. Qui adipisicing est fugiat eiusmod esse. Sint aliqua cupidatat pariatur mollit ad est proident reprehenderit. Eiusmod adipisicing laborum incididunt sit aliqua ullamco.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '1',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 9.309,
      priceTaxIncl: 10.24,
      taxRate: 10,
      comparedPrice: 19.9,
      quantity: 3,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '12',
      name: 'Never Stop Changing - Canvas Print',
      handle: 'never-stop-changing-canvas-print',
      description:
        'Excepteur commodo ipsum in ex esse elit ea id voluptate id occaecat. Sunt Lorem ipsum ut proident eu aliquip velit non minim. Sunt velit deserunt veniam eu non veniam. Eiusmod sit ex et id incididunt labore aliqua eu aute dolor cillum ex mollit mollit. Incididunt voluptate adipisicing eiusmod non ipsum cupidatat excepteur enim in pariatur eu. Labore dolor qui exercitation amet labore laboris Lorem do adipisicing. Minim non consectetur adipisicing esse ut occaecat incididunt eiusmod commodo et cillum pariatur.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '7',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 58.372,
      priceTaxIncl: 64.21,
      taxRate: 10,
      comparedPrice: 69.9,
      quantity: 34,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '13',
      name: 'Morain Lake - Canvas Print',
      handle: 'morain-lake-canvas-print',
      description:
        'Consequat minim velit commodo Lorem ipsum velit elit amet ut. In deserunt id duis nisi labore. Proident cillum et reprehenderit excepteur ex nulla enim.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '9',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 52.154,
      priceTaxIncl: 57.37,
      taxRate: 10,
      comparedPrice: 59.9,
      quantity: 58,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '14',
      name: 'Braies Lake - Canvas Print',
      handle: 'braies-lake-canvas-print',
      description:
        'Duis anim est non exercitation consequat. Ullamco ut ipsum dolore est elit est ea elit ad fugiat exercitation. Adipisicing eu ad sit culpa sint. Minim irure Lorem eiusmod minim nisi sit est consectetur.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '2',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 22.381,
      priceTaxIncl: 24.62,
      taxRate: 10,
      comparedPrice: 29.9,
      quantity: 92,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '15',
      name: 'Lago di Braies - Canvas Print',
      handle: 'lago-di-braies-canvas-print',
      description:
        'Laboris laborum minim qui reprehenderit duis fugiat ea anim labore incididunt duis. Officia adipisicing anim amet in sit aliqua fugiat quis do sint non velit eu. Labore occaecat labore elit voluptate Lorem adipisicing et ipsum id et reprehenderit ullamco. Elit in nulla laborum nulla quis dolor deserunt magna dolor ad anim magna. Esse aute reprehenderit anim sit est et quis est. Ex reprehenderit culpa deserunt qui sint eiusmod reprehenderit ipsum consequat ut.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '5',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 9.309,
      priceTaxIncl: 10.24,
      taxRate: 10,
      comparedPrice: 19.9,
      quantity: 19,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '16',
      name: 'Fall Glow - Canvas Print',
      handle: 'fall-glow-canvas-print',
      description:
        'Sit ipsum esse eu consequat veniam sit consectetur consectetur anim. Ut Lorem dolor ullamco do. Laboris excepteur consectetur tempor nisi commodo amet deserunt duis.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '3',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 44.809,
      priceTaxIncl: 49.29,
      taxRate: 10,
      comparedPrice: 59.9,
      quantity: 60,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '17',
      name: 'Lago di Sorapis - Canvas Print',
      handle: 'lago-di-sorapis-canvas-print',
      description:
        'Tempor sunt tempor veniam non culpa excepteur. Ea irure elit non cupidatat cillum dolore. Sit incididunt qui dolore ipsum commodo aliqua amet cupidatat incididunt nisi qui consectetur. Cillum eu aute qui irure aute adipisicing cupidatat magna.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '6',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 53.963,
      priceTaxIncl: 59.36,
      taxRate: 10,
      comparedPrice: 69.9,
      quantity: 101,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
    {
      id: '18',
      name: 'Reaching - Canvas Print',
      handle: 'reaching-canvas-print',
      description:
        'Velit cillum cupidatat eiusmod ea quis sit. Consequat dolore elit sunt sunt voluptate irure incididunt consectetur non. Dolore veniam ipsum anim commodo ex. Proident ipsum nostrud ullamco sit. Ad dolore nulla qui mollit laborum ex ipsum.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '8',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 63.39,
      priceTaxIncl: 69.73,
      taxRate: 10,
      comparedPrice: 79.9,
      quantity: 4,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: false,
    },
    {
      id: '19',
      name: 'First Snow - Canvas Print',
      handle: 'first-snow-canvas-print',
      description:
        'Incididunt nostrud culpa labore nostrud veniam nostrud dolore velit sunt laborum ad reprehenderit. Excepteur enim irure ut labore elit ut deserunt qui qui consequat quis do nostrud ad. Aliqua dolor labore ut occaecat laborum irure. Aute in deserunt do aute laborum sit et reprehenderit minim voluptate proident do est.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '4',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 62.827,
      priceTaxIncl: 69.11,
      taxRate: 10,
      comparedPrice: 79.9,
      quantity: 101,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: false,
    },
    {
      id: '20',
      name: 'Yosemite - Canvas Print',
      handle: 'yosemite-canvas-print',
      description:
        'Proident do sunt dolor tempor aliquip adipisicing dolor reprehenderit officia proident. Culpa non reprehenderit velit anim consequat velit elit eu culpa quis incididunt id. Eu incididunt exercitation nostrud est mollit officia. Laboris deserunt dolore sit occaecat exercitation quis sunt sunt nisi commodo.',
      categories: ['Canvas Print', 'Nature'],
      tags: ['canvas-print', 'nature'],
      featuredImageId: '9',
      images: [
        {
          id: '0',
          url: 'assets/images/ecommerce/a-walk-amongst-friends.jpg',
          type: 'image',
        },
        {
          id: '1',
          url: 'assets/images/ecommerce/braies-lake.jpg',
          type: 'image',
        },
        {
          id: '2',
          url: 'assets/images/ecommerce/fall-glow.jpg',
          type: 'image',
        },
        {
          id: '3',
          url: 'assets/images/ecommerce/first-snow.jpg',
          type: 'image',
        },
        {
          id: '4',
          url: 'assets/images/ecommerce/lago-di-braies.jpg',
          type: 'image',
        },
        {
          id: '5',
          url: 'assets/images/ecommerce/lago-di-sorapis.jpg',
          type: 'image',
        },
        {
          id: '6',
          url: 'assets/images/ecommerce/never-stop-changing.jpg',
          type: 'image',
        },
        {
          id: '7',
          url: 'assets/images/ecommerce/reaching.jpg',
          type: 'image',
        },
        {
          id: '8',
          url: 'assets/images/ecommerce/morain-lake.jpg',
          type: 'image',
        },
        {
          id: '9',
          url: 'assets/images/ecommerce/yosemite.jpg',
          type: 'image',
        },
      ],
      priceTaxExcl: 62.18,
      priceTaxIncl: 68.4,
      taxRate: 10,
      comparedPrice: 69.9,
      quantity: 125,
      sku: 'A445BV',
      width: '22cm',
      height: '24cm',
      depth: '15cm',
      weight: '3kg',
      extraShippingFee: 3.0,
      active: true,
    },
  ],
  orders: [
    {
      'quantity': 1000,
      'log': [
        {
          'event':
            'Signal became unavailable due to missing the Target1 before entering the trade.',
          'timestamp': 1630522624213,
        },
        {
          'event':
            'Signal became unavailable due to missing the Target1 before entering the trade.',
          'timestamp': 1630522864307,
        },
        {
          'event':
            'Entry1 hit; quantityToBuy: 1000, amount: 0.2698225107524271, price: 3706.14.',
          'timestamp': 1630523164926,
        },
        {
          'event':
            'Target1 hit at price: 3706.14, remainingQuantity: 450, quantityToSell: 550.',
          'timestamp': 1630523165485,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 3710.09.',
          'timestamp': 1630523165619,
        },
        {
          'event':
            'Entry1 hit; quantityToBuy: 1000, amount: 0.26983124753778986, price: 3706.02.',
          'timestamp': 1630523166170,
        },
        {
          'event':
            'Target1 hit at price: 3706.02, remainingQuantity: 450, quantityToSell: 550.',
          'timestamp': 1630523166858,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 3710.09.',
          'timestamp': 1630523167082,
        },
        {
          'event': 'Signal became unavailable due to stoploss hit.',
          'timestamp': 1630523224479,
        },
        {
          'event':
            'Stoploss hit; remainingQuantity: 450, amount: 0.12153720253769679.',
          'timestamp': 1630523224826,
        },
        {
          'event': 'Signal became unavailable due to stoploss hit.',
          'timestamp': 1630524544559,
        },
        {
          'event':
            'Error selling on Stoploss hit; remainingQuantity: 450, amount: 0.12113707332830838.',
          'timestamp': 1630524544832,
        },
        {
          'event':
            'Entry1 hit; quantityToBuy: 1000, amount: 0.2694931104086324, price: 3710.67.',
          'timestamp': 1630524664485,
        },
        {
          'event':
            'Target1 hit at price: 3762.87, remainingQuantity: 202.5, quantityToSell: 247.5.',
          'timestamp': 1630531805178,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 3710.09.',
          'timestamp': 1630531805324,
        },
        {
          'event': 'Signal became unavailable due to stoploss hit.',
          'timestamp': 1630565644670,
        },
        {
          'event':
            'Stoploss hit; remainingQuantity: 202.5, amount: 0.05431808671580777.',
          'timestamp': 1630565645039,
        },
      ],
      'currency': 'ETH/USDT',
      'fulfilledTargets': [3762.87],
      children:[],
      'stoploss': 3710.09,
      'entry': [3710.09, 3337.63, 3059.06],
      'id': 'a55221df-73ac-4109-b449-95cac2ff2686',
      'timestamp': 1630520285453,
      'transactions': [
        {
          'type': 'entry1',
          'price': 3706.02,
          'quantity': 1000,
        },
        {
          'type': 'target1',
          'price': 3706.02,
          'quantity': 550,
        },
        {
          'type': 'stoploss',
          'price': 3702.57,
          'quantity': 450,
        },
        {
          'type': 'entry1',
          'price': 3710.67,
          'quantity': 1000,
        },
        {
          'type': 'target1',
          'price': 3762.87,
          'quantity': 247.5,
        },
        {
          'type': 'stoploss',
          'price': 3728.04,
          'quantity': 202.5,
        },
      ],
      'fulfilledEntries': [3710.67],
      'market': 'binance',
      'expired': true,
      'remainingQuantity': 202.5,
      'target': [3780.75, 3859.39, 4254.63],
      'leverage': 1,
      'position': 'buy',
    },
    {
      'quantity': 1000,
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 1000, amount: 2769.3159789531987, price: 0.3611.',
          'timestamp': 1630594264628,
        },
        {
          'event':
            'Target1 hit at price: 0.3778, remainingQuantity: 450, quantityToSell: 550.',
          'timestamp': 1630699205208,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 0.3629.',
          'timestamp': 1630699205509,
        },
      ],
      'currency': 'XLM/USDT',
      'fulfilledTargets': [0.3776],
      children:[],
      'stoploss': 0.3629,
      'entry': [0.3629, 0.3466, 0.3159],
      'id': '4301cdde-af57-4855-bcce-d47de74fd189',
      'timestamp': 1630594206276,
      'transactions': [
        {
          'type': 'entry1',
          'price': 0.3611,
          'quantity': 1000,
        },
        {
          'quantity': 550,
          'type': 'target1',
          'price': 0.3778,
          'timestamp': 1630699205359,
        },
      ],
      'fulfilledEntries': [0.3611],
      'market': 'binance',
      'expired': false,
      'remainingQuantity': 450,
      'target': [0.3776, 0.3995, 0.4453],
      'leverage': 1,
      'position': 'buy',
    },
    {
      'quantity': 1000,
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 1000, amount: 4.2158516020236085, price: 237.2.',
          'timestamp': 1630526045378,
        },
        {
          'event':
            'Target1 hit at price: 244.5, remainingQuantity: 450, quantityToSell: 550.',
          'timestamp': 1630582024839,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 240.36.',
          'timestamp': 1630582024988,
        },
        {
          'event': 'Signal became unavailable due to stoploss hit.',
          'timestamp': 1630592584593,
        },
        {
          'event':
            'Stoploss hit; remainingQuantity: 450, amount: 1.8633540372670807.',
          'timestamp': 1630592584960,
        },
      ],
      'currency': 'DASH/USDT',
      'fulfilledTargets': [244.5],
      children:[],
      'stoploss': 240.36,
      'entry': [240.36, 217.61, 200.53],
      'id': 'd1676e73-623d-4e50-8b0e-0faedf57579c',
      'timestamp': 1630519831032,
      'transactions': [
        {
          'type': 'entry1',
          'price': 237.2,
          'quantity': 1000,
        },
        {
          'type': 'target1',
          'price': 244.5,
          'quantity': 550,
        },
        {
          'type': 'stoploss',
          'price': 241.5,
          'quantity': 450,
        },
      ],
      'fulfilledEntries': [237.2],
      'market': 'binance',
      'expired': true,
      'remainingQuantity': 450,
      'target': [245.69, 251.34, 276.23],
      'leverage': 1,
      'position': 'buy',
    },
    {
      'quantity': 1500,
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 1500, amount: 10554.461018857304, price: 0.14212.',
          'timestamp': 1630707304883,
        },
        {
          'event':
            'Target1 hit at price: 0.1484, remainingQuantity: 675, quantityToSell: 825.',
          'timestamp': 1630738085266,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 0.14229.',
          'timestamp': 1630738085573,
        },
        {
          'event': 'Signal expired due to stoploss hit.',
          'timestamp': 1630776424819,
        },
        {
          'event':
            'Stoploss hit; remainingQuantity: 675, amount: 4746.835443037975.',
          'timestamp': 1630776425338,
        },
      ],
      'currency': 'VET/USDT',
      'fulfilledTargets': [0.14826],
      children:[],
      'stoploss': 0.14229,
      'entry': [0.14229, 0.13513, 0.12329],
      'id': 'a34be7a1-7e68-45dd-8938-e3c3014a5dbb',
      'timestamp': 1630678327888,
      'transactions': [
        {
          'quantity': 1500,
          'type': 'entry1',
          'price': 0.14212,
          'timestamp': 1630707305032,
        },
        {
          'quantity': 825,
          'type': 'target1',
          'price': 0.1484,
          'timestamp': 1630738085420,
        },
        {
          'quantity': 675,
          'type': 'stoploss',
          'price': 0.1422,
          'timestamp': 1630776425260,
        },
      ],
      'fulfilledEntries': [0.14229],
      'market': 'binance',
      'expired': true,
      'remainingQuantity': 675,
      'target': [0.14826, 0.15653, 0.17549],
      'leverage': 1,
      'position': 'buy',
    },
    {
      'quantity': 1000,
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 1000, amount: 685.4009595613434, price: 1.459.',
          'timestamp': 1630594084752,
        },
        {
          'event':
            'Target1 hit at price: 1.471, remainingQuantity: 1350, quantityToSell: 1650.',
          'timestamp': 1630735624865,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 1.476.',
          'timestamp': 1630735625160,
        },
        {
          'event': 'Signal expired due to stoploss hit.',
          'timestamp': 1630735684647,
        },
        {
          'event':
            'Stoploss hit; remainingQuantity: 1350, amount: 917.7430319510537.',
          'timestamp': 1630735685134,
        },
      ],
      'currency': 'MATIC/USDT',
      'fulfilledTargets': [1.471],
      children:[],
      'stoploss': 1.476,
      'entry': [1.476, 1.409, 1.293],
      'id': '86c02e9b-67b3-4e84-82ed-c83cab75c336',
      'timestamp': 1630594033445,
      'transactions': [
        {
          'type': 'entry1',
          'price': 1.459,
          'quantity': 1000,
        },
        {
          'quantity': 2000,
          'type': 'entry2',
          'price': 1.416,
          'timestamp': 1630629665084,
        },
        {
          'quantity': 1650,
          'type': 'target1',
          'price': 1.471,
          'timestamp': 1630735625012,
        },
        {
          'quantity': 1350,
          'type': 'stoploss',
          'price': 1.471,
          'timestamp': 1630735685064,
        },
      ],
      'fulfilledEntries': [1.459, 1.416],
      'market': 'binance',
      'expired': true,
      'remainingQuantity': 1350,
      'target': [1.471, 1.556, 1.728],
      'leverage': 1,
      'position': 'buy',
    },
    {
      'quantity': 1500,
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 1500, amount: 276.14138438880707, price: 5.432.',
          'timestamp': 1630678264840,
        },
        {
          'event':
            'Target1 hit at price: 5.635, remainingQuantity: 675, quantityToSell: 825.',
          'timestamp': 1630685345486,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 5.419.',
          'timestamp': 1630685345801,
        },
      ],
      'currency': 'EOS/USDT',
      'fulfilledTargets': [5.643],
      children:[],
      'stoploss': 5.419,
      'entry': [5.419, 5.163, 4.759],
      'id': 'c56ab268-0818-4200-ad9d-14cf5bfd8e3c',
      'timestamp': 1630678246031,
      'transactions': [
        {
          'quantity': 1500,
          'type': 'entry1',
          'price': 5.432,
          'timestamp': 1630678264987,
        },
        {
          'quantity': 825,
          'type': 'target1',
          'price': 5.635,
          'timestamp': 1630685345641,
        },
      ],
      'fulfilledEntries': [5.419],
      'market': 'binance',
      'expired': false,
      'remainingQuantity': 675,
      'target': [5.643, 5.932, 6.559],
      'leverage': 1,
      'position': 'buy',
    },
    {
      'quantity': 5000,
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 5000, amount: 671.591672263264, price: 7.445.',
          'timestamp': 1630775105249,
        },
        {
          'event':
            'Target1 hit at price: 7.76, remainingQuantity: 2250, quantityToSell: 2750.',
          'timestamp': 1630813565370,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 7.469.',
          'timestamp': 1630813565661,
        },
      ],
      'currency': 'THETA/USDT',
      'fulfilledTargets': [7.776],
      children:[],
      'stoploss': 7.469,
      'entry': [7.469, 7.113, 6.569],
      'id': 'd3bf662a-6d56-4bde-a2a5-21db6c83400f',
      'timestamp': 1630775094704,
      'transactions': [
        {
          'quantity': 5000,
          'type': 'entry1',
          'price': 7.445,
          'timestamp': 1630775105403,
        },
        {
          'quantity': 2750,
          'type': 'target1',
          'price': 7.76,
          'timestamp': 1630813565516,
        },
      ],
      'fulfilledEntries': [7.469],
      'market': 'binance',
      'expired': false,
      'remainingQuantity': 2250,
      'target': [7.776, 8.223, 9.049],
      'leverage': 1,
      'position': 'buy',
    },
    {
      'quantity': 1000,
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 1000, amount: 2.0614306328592042, price: 485.1.',
          'timestamp': 1630525985560,
        },
        {
          'event':
            'Target1 hit at price: 498.1, remainingQuantity: 450, quantityToSell: 550.',
          'timestamp': 1630544645093,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 490.36.',
          'timestamp': 1630544645242,
        },
        {
          'event': 'Signal became unavailable due to stoploss hit.',
          'timestamp': 1630551544599,
        },
        {
          'event':
            'Stoploss hit; remainingQuantity: 450, amount: 0.9135200974421437.',
          'timestamp': 1630551544964,
        },
      ],
      'currency': 'BNB/USDT',
      'fulfilledTargets': [498.1],
      children:[],
      'stoploss': 490.36,
      'entry': [490.36, 449.13, 416.98],
      'id': '2d3e5685-2143-4707-9b5b-ef66ee6bee08',
      'timestamp': 1630519544621,
      'transactions': [
        {
          'type': 'entry1',
          'price': 485.1,
          'quantity': 1000,
        },
        {
          'type': 'target1',
          'price': 498.1,
          'quantity': 550,
        },
        {
          'type': 'stoploss',
          'price': 492.6,
          'quantity': 450,
        },
      ],
      'fulfilledEntries': [485.1],
      'market': 'binance',
      'expired': true,
      'remainingQuantity': 450,
      'target': [500.59, 518.93, 569.03],
      'leverage': 1,
      'position': 'buy',
    },
    {
      'quantity': 5000,
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 5000, amount: 0.11851860279841384, price: 42187.47.',
          'timestamp': 1630779426516,
        },
      ],
      'currency': 'YFI/USDT',
      'fulfilledTargets': [],
      children:[],
      'stoploss': 33846,
      'entry': [42225, 39419, 36527],
      'id': 'cb82f7ce-95fb-4509-b20a-cd7da659fff8',
      'timestamp': 1630775077155,
      'transactions': [
        {
          'quantity': 5000,
          'type': 'entry1',
          'price': 42187.47,
          'timestamp': 1630779426659,
        },
      ],
      'fulfilledEntries': [42225],
      'market': 'binance',
      'expired': false,
      'remainingQuantity': 5000,
      'target': [43116, 45549, 49723],
      'leverage': 1,
      'position': 'buy',
    },
    {
      'origin': 'mlTrader',
      'quantity': 100,
      'strategy': '1',
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 100, amount: 1.3178703215603584, price: 75.88.',
          'timestamp': 1630467735797,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.82, quantityToSell: 5.5.',
          'timestamp': 1630473904263,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.86, quantityToSell: 5.5.',
          'timestamp': 1630474504813,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.95, quantityToSell: 5.5.',
          'timestamp': 1630475164392,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.83, quantityToSell: 5.5.',
          'timestamp': 1630475584733,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.93, quantityToSell: 5.5.',
          'timestamp': 1630475644615,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630475705090,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.06, quantityToSell: 5.5.',
          'timestamp': 1630475764540,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.93, quantityToSell: 5.5.',
          'timestamp': 1630475824699,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.83, quantityToSell: 5.5.',
          'timestamp': 1630475884436,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.82, quantityToSell: 5.5.',
          'timestamp': 1630475944736,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.92, quantityToSell: 5.5.',
          'timestamp': 1630476004611,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.94, quantityToSell: 5.5.',
          'timestamp': 1630476065151,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.83, quantityToSell: 5.5.',
          'timestamp': 1630476124374,
        },
        {
          'event':
            'Error selling on Target1 at price: 77, quantityToSell: 5.5.',
          'timestamp': 1630477576364,
        },
        {
          'event':
            'Error selling on Target1 at price: 77, quantityToSell: 5.5.',
          'timestamp': 1630477865020,
        },
        {
          'event':
            'Error selling on Target1 at price: 77, quantityToSell: 5.5.',
          'timestamp': 1630477951090,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.86, quantityToSell: 5.5.',
          'timestamp': 1630487764931,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.81, quantityToSell: 5.5.',
          'timestamp': 1630487884456,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.88, quantityToSell: 5.5.',
          'timestamp': 1630487944980,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.09, quantityToSell: 5.5.',
          'timestamp': 1630488004805,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.07, quantityToSell: 5.5.',
          'timestamp': 1630488064400,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.91, quantityToSell: 5.5.',
          'timestamp': 1630488125053,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.85, quantityToSell: 5.5.',
          'timestamp': 1630488184814,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.89, quantityToSell: 5.5.',
          'timestamp': 1630488244744,
        },
        {
          'event':
            'Error selling on Target1 at price: 77, quantityToSell: 5.5.',
          'timestamp': 1630488304700,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.99, quantityToSell: 5.5.',
          'timestamp': 1630488364407,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.94, quantityToSell: 5.5.',
          'timestamp': 1630488424314,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.95, quantityToSell: 5.5.',
          'timestamp': 1630488485078,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.99, quantityToSell: 5.5.',
          'timestamp': 1630488544670,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.07, quantityToSell: 5.5.',
          'timestamp': 1630488604528,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.02, quantityToSell: 5.5.',
          'timestamp': 1630488664587,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.81, quantityToSell: 5.5.',
          'timestamp': 1630488724332,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.81, quantityToSell: 5.5.',
          'timestamp': 1630489204902,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.86, quantityToSell: 5.5.',
          'timestamp': 1630489324694,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.84, quantityToSell: 5.5.',
          'timestamp': 1630490164476,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.85, quantityToSell: 5.5.',
          'timestamp': 1630490224503,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.95, quantityToSell: 5.5.',
          'timestamp': 1630490284649,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.91, quantityToSell: 5.5.',
          'timestamp': 1630490344594,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.88, quantityToSell: 5.5.',
          'timestamp': 1630490404590,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.98, quantityToSell: 5.5.',
          'timestamp': 1630490468467,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.92, quantityToSell: 5.5.',
          'timestamp': 1630490524964,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.99, quantityToSell: 5.5.',
          'timestamp': 1630490584549,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.93, quantityToSell: 5.5.',
          'timestamp': 1630490644497,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.85, quantityToSell: 5.5.',
          'timestamp': 1630490704640,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.89, quantityToSell: 5.5.',
          'timestamp': 1630490764699,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.91, quantityToSell: 5.5.',
          'timestamp': 1630490824813,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630490884667,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630490945130,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.01, quantityToSell: 5.5.',
          'timestamp': 1630491004796,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.98, quantityToSell: 5.5.',
          'timestamp': 1630491064841,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.9, quantityToSell: 5.5.',
          'timestamp': 1630491125068,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.87, quantityToSell: 5.5.',
          'timestamp': 1630491185290,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.9, quantityToSell: 5.5.',
          'timestamp': 1630491244414,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.94, quantityToSell: 5.5.',
          'timestamp': 1630491304517,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.89, quantityToSell: 5.5.',
          'timestamp': 1630491364763,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.83, quantityToSell: 5.5.',
          'timestamp': 1630491424901,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.87, quantityToSell: 5.5.',
          'timestamp': 1630491484631,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.91, quantityToSell: 5.5.',
          'timestamp': 1630491544576,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.98, quantityToSell: 5.5.',
          'timestamp': 1630491604399,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.97, quantityToSell: 5.5.',
          'timestamp': 1630491664995,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.01, quantityToSell: 5.5.',
          'timestamp': 1630491724486,
        },
        {
          'event':
            'Error selling on Target1 at price: 77, quantityToSell: 5.5.',
          'timestamp': 1630491784719,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.94, quantityToSell: 5.5.',
          'timestamp': 1630491844749,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.87, quantityToSell: 5.5.',
          'timestamp': 1630491904923,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.88, quantityToSell: 5.5.',
          'timestamp': 1630491964448,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.94, quantityToSell: 5.5.',
          'timestamp': 1630492024926,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.97, quantityToSell: 5.5.',
          'timestamp': 1630492084485,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.03, quantityToSell: 5.5.',
          'timestamp': 1630492144947,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.03, quantityToSell: 5.5.',
          'timestamp': 1630492204626,
        },
        {
          'event':
            'Error selling on Target1 at price: 77, quantityToSell: 5.5.',
          'timestamp': 1630492264571,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.93, quantityToSell: 5.5.',
          'timestamp': 1630492325129,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.9, quantityToSell: 5.5.',
          'timestamp': 1630492384802,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.94, quantityToSell: 5.5.',
          'timestamp': 1630492444684,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.03, quantityToSell: 5.5.',
          'timestamp': 1630492504691,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.12, quantityToSell: 5.5.',
          'timestamp': 1630492564747,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.14, quantityToSell: 5.5.',
          'timestamp': 1630492624777,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.15, quantityToSell: 5.5.',
          'timestamp': 1630492684663,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.33, quantityToSell: 5.5.',
          'timestamp': 1630492744435,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.23, quantityToSell: 5.5.',
          'timestamp': 1630492804828,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.31, quantityToSell: 5.5.',
          'timestamp': 1630492864289,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.27, quantityToSell: 5.5.',
          'timestamp': 1630492924881,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.2, quantityToSell: 5.5.',
          'timestamp': 1630492985095,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.24, quantityToSell: 5.5.',
          'timestamp': 1630493045128,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.13, quantityToSell: 5.5.',
          'timestamp': 1630493105051,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.04, quantityToSell: 5.5.',
          'timestamp': 1630493164803,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.9, quantityToSell: 5.5.',
          'timestamp': 1630493224816,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.82, quantityToSell: 5.5.',
          'timestamp': 1630493285087,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.82, quantityToSell: 5.5.',
          'timestamp': 1630493404803,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.92, quantityToSell: 5.5.',
          'timestamp': 1630494125126,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.89, quantityToSell: 5.5.',
          'timestamp': 1630494184896,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.01, quantityToSell: 5.5.',
          'timestamp': 1630494245238,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.91, quantityToSell: 5.5.',
          'timestamp': 1630494305079,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.83, quantityToSell: 5.5.',
          'timestamp': 1630494365179,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.86, quantityToSell: 5.5.',
          'timestamp': 1630495264548,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.88, quantityToSell: 5.5.',
          'timestamp': 1630495324738,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.05, quantityToSell: 5.5.',
          'timestamp': 1630495384544,
        },
        {
          'event':
            'Error selling on Target1 at price: 77, quantityToSell: 5.5.',
          'timestamp': 1630495445072,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.99, quantityToSell: 5.5.',
          'timestamp': 1630495504514,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.9, quantityToSell: 5.5.',
          'timestamp': 1630495564710,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.86, quantityToSell: 5.5.',
          'timestamp': 1630495624570,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.85, quantityToSell: 5.5.',
          'timestamp': 1630495684772,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.82, quantityToSell: 5.5.',
          'timestamp': 1630495744800,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.91, quantityToSell: 5.5.',
          'timestamp': 1630495804512,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.94, quantityToSell: 5.5.',
          'timestamp': 1630495864496,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.87, quantityToSell: 5.5.',
          'timestamp': 1630495924738,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.87, quantityToSell: 5.5.',
          'timestamp': 1630495984813,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.84, quantityToSell: 5.5.',
          'timestamp': 1630496044929,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.84, quantityToSell: 5.5.',
          'timestamp': 1630496224635,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630496284954,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630496344709,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630496404559,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.1, quantityToSell: 5.5.',
          'timestamp': 1630496464914,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.09, quantityToSell: 5.5.',
          'timestamp': 1630496524859,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.16, quantityToSell: 5.5.',
          'timestamp': 1630496584912,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.07, quantityToSell: 5.5.',
          'timestamp': 1630496645161,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.01, quantityToSell: 5.5.',
          'timestamp': 1630496704706,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.13, quantityToSell: 5.5.',
          'timestamp': 1630496764611,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.17, quantityToSell: 5.5.',
          'timestamp': 1630496824879,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.25, quantityToSell: 5.5.',
          'timestamp': 1630496884514,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.28, quantityToSell: 5.5.',
          'timestamp': 1630496944721,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.25, quantityToSell: 5.5.',
          'timestamp': 1630497005158,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.16, quantityToSell: 5.5.',
          'timestamp': 1630497064788,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.13, quantityToSell: 5.5.',
          'timestamp': 1630497125317,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.05, quantityToSell: 5.5.',
          'timestamp': 1630497184681,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.08, quantityToSell: 5.5.',
          'timestamp': 1630497244549,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.07, quantityToSell: 5.5.',
          'timestamp': 1630497305583,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.14, quantityToSell: 5.5.',
          'timestamp': 1630497365088,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.07, quantityToSell: 5.5.',
          'timestamp': 1630497425145,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.12, quantityToSell: 5.5.',
          'timestamp': 1630497484942,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.03, quantityToSell: 5.5.',
          'timestamp': 1630497544631,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.1, quantityToSell: 5.5.',
          'timestamp': 1630497604546,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.1, quantityToSell: 5.5.',
          'timestamp': 1630497664875,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.19, quantityToSell: 5.5.',
          'timestamp': 1630497724610,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.28, quantityToSell: 5.5.',
          'timestamp': 1630497784901,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.26, quantityToSell: 5.5.',
          'timestamp': 1630497844567,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.61, quantityToSell: 5.5.',
          'timestamp': 1630497904911,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.64, quantityToSell: 5.5.',
          'timestamp': 1630497964500,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.51, quantityToSell: 5.5.',
          'timestamp': 1630498024495,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.62, quantityToSell: 5.5.',
          'timestamp': 1630498084886,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.61, quantityToSell: 5.5.',
          'timestamp': 1630498144602,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.52, quantityToSell: 5.5.',
          'timestamp': 1630498205101,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.53, quantityToSell: 5.5.',
          'timestamp': 1630498264769,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.59, quantityToSell: 5.5.',
          'timestamp': 1630498324829,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.61, quantityToSell: 5.5.',
          'timestamp': 1630498384966,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.82, quantityToSell: 5.5.',
          'timestamp': 1630498444918,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.72, quantityToSell: 5.5.',
          'timestamp': 1630498504820,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.63, quantityToSell: 5.5.',
          'timestamp': 1630498564846,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.59, quantityToSell: 5.5.',
          'timestamp': 1630498624680,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.65, quantityToSell: 5.5.',
          'timestamp': 1630498684848,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.6, quantityToSell: 5.5.',
          'timestamp': 1630498744764,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.56, quantityToSell: 5.5.',
          'timestamp': 1630498804670,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.54, quantityToSell: 5.5.',
          'timestamp': 1630498864676,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.59, quantityToSell: 5.5.',
          'timestamp': 1630498924629,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.63, quantityToSell: 5.5.',
          'timestamp': 1630498984795,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.58, quantityToSell: 5.5.',
          'timestamp': 1630499044913,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.63, quantityToSell: 5.5.',
          'timestamp': 1630499104798,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.5, quantityToSell: 5.5.',
          'timestamp': 1630499164898,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.8, quantityToSell: 5.5.',
          'timestamp': 1630499224745,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.75, quantityToSell: 5.5.',
          'timestamp': 1630499284733,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.8, quantityToSell: 5.5.',
          'timestamp': 1630499345077,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.96, quantityToSell: 5.5.',
          'timestamp': 1630499405152,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.96, quantityToSell: 5.5.',
          'timestamp': 1630499464541,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.06, quantityToSell: 5.5.',
          'timestamp': 1630499524855,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.01, quantityToSell: 5.5.',
          'timestamp': 1630499584934,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.88, quantityToSell: 5.5.',
          'timestamp': 1630499644821,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.69, quantityToSell: 5.5.',
          'timestamp': 1630499704833,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.59, quantityToSell: 5.5.',
          'timestamp': 1630499764742,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.61, quantityToSell: 5.5.',
          'timestamp': 1630499825130,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.66, quantityToSell: 5.5.',
          'timestamp': 1630499885377,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.63, quantityToSell: 5.5.',
          'timestamp': 1630499944850,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.66, quantityToSell: 5.5.',
          'timestamp': 1630500004719,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.61, quantityToSell: 5.5.',
          'timestamp': 1630500064669,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.57, quantityToSell: 5.5.',
          'timestamp': 1630500124829,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.55, quantityToSell: 5.5.',
          'timestamp': 1630500184754,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.44, quantityToSell: 5.5.',
          'timestamp': 1630500244675,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.47, quantityToSell: 5.5.',
          'timestamp': 1630500304546,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.48, quantityToSell: 5.5.',
          'timestamp': 1630500364781,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.48, quantityToSell: 5.5.',
          'timestamp': 1630500424526,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.45, quantityToSell: 5.5.',
          'timestamp': 1630500484771,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.43, quantityToSell: 5.5.',
          'timestamp': 1630500544602,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.44, quantityToSell: 5.5.',
          'timestamp': 1630500604698,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.43, quantityToSell: 5.5.',
          'timestamp': 1630500664532,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.59, quantityToSell: 5.5.',
          'timestamp': 1630500724633,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.48, quantityToSell: 5.5.',
          'timestamp': 1630500784926,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.44, quantityToSell: 5.5.',
          'timestamp': 1630500845139,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.43, quantityToSell: 5.5.',
          'timestamp': 1630500905065,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.43, quantityToSell: 5.5.',
          'timestamp': 1630500965195,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.45, quantityToSell: 5.5.',
          'timestamp': 1630501025457,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.43, quantityToSell: 5.5.',
          'timestamp': 1630501084653,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.49, quantityToSell: 5.5.',
          'timestamp': 1630501145343,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.46, quantityToSell: 5.5.',
          'timestamp': 1630501204891,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.54, quantityToSell: 5.5.',
          'timestamp': 1630501265144,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.5, quantityToSell: 5.5.',
          'timestamp': 1630501324804,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.71, quantityToSell: 5.5.',
          'timestamp': 1630501384935,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.53, quantityToSell: 5.5.',
          'timestamp': 1630501444642,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.39, quantityToSell: 5.5.',
          'timestamp': 1630501504985,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.46, quantityToSell: 5.5.',
          'timestamp': 1630501564644,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.41, quantityToSell: 5.5.',
          'timestamp': 1630501624905,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.41, quantityToSell: 5.5.',
          'timestamp': 1630501684532,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.46, quantityToSell: 5.5.',
          'timestamp': 1630501744985,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.46, quantityToSell: 5.5.',
          'timestamp': 1630501805019,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.41, quantityToSell: 5.5.',
          'timestamp': 1630501865489,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.4, quantityToSell: 5.5.',
          'timestamp': 1630501924870,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.27, quantityToSell: 5.5.',
          'timestamp': 1630501984934,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.03, quantityToSell: 5.5.',
          'timestamp': 1630502044857,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.02, quantityToSell: 5.5.',
          'timestamp': 1630502104790,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.19, quantityToSell: 5.5.',
          'timestamp': 1630502164928,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.29, quantityToSell: 5.5.',
          'timestamp': 1630502224849,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.25, quantityToSell: 5.5.',
          'timestamp': 1630502284815,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.09, quantityToSell: 5.5.',
          'timestamp': 1630502345257,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.85, quantityToSell: 5.5.',
          'timestamp': 1630502464561,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.87, quantityToSell: 5.5.',
          'timestamp': 1630502524514,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.89, quantityToSell: 5.5.',
          'timestamp': 1630503244940,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.89, quantityToSell: 5.5.',
          'timestamp': 1630503364489,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.89, quantityToSell: 5.5.',
          'timestamp': 1630503425455,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.84, quantityToSell: 5.5.',
          'timestamp': 1630503484332,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.9, quantityToSell: 5.5.',
          'timestamp': 1630503544876,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.85, quantityToSell: 5.5.',
          'timestamp': 1630503605090,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.85, quantityToSell: 5.5.',
          'timestamp': 1630503964611,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.84, quantityToSell: 5.5.',
          'timestamp': 1630504024428,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.87, quantityToSell: 5.5.',
          'timestamp': 1630504144660,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.85, quantityToSell: 5.5.',
          'timestamp': 1630504204446,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.86, quantityToSell: 5.5.',
          'timestamp': 1630504264602,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.83, quantityToSell: 5.5.',
          'timestamp': 1630504325069,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.82, quantityToSell: 5.5.',
          'timestamp': 1630504384699,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.81, quantityToSell: 5.5.',
          'timestamp': 1630504444429,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.83, quantityToSell: 5.5.',
          'timestamp': 1630504504606,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.89, quantityToSell: 5.5.',
          'timestamp': 1630504864712,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.85, quantityToSell: 5.5.',
          'timestamp': 1630506604473,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630506664705,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.03, quantityToSell: 5.5.',
          'timestamp': 1630506724701,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630506784653,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.84, quantityToSell: 5.5.',
          'timestamp': 1630506844716,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.83, quantityToSell: 5.5.',
          'timestamp': 1630506904391,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.86, quantityToSell: 5.5.',
          'timestamp': 1630508824824,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.81, quantityToSell: 5.5.',
          'timestamp': 1630508884633,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.84, quantityToSell: 5.5.',
          'timestamp': 1630509424692,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.99, quantityToSell: 5.5.',
          'timestamp': 1630509485007,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.98, quantityToSell: 5.5.',
          'timestamp': 1630509544734,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.04, quantityToSell: 5.5.',
          'timestamp': 1630509605155,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.11, quantityToSell: 5.5.',
          'timestamp': 1630509664991,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.15, quantityToSell: 5.5.',
          'timestamp': 1630509724550,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.23, quantityToSell: 5.5.',
          'timestamp': 1630509784941,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.41, quantityToSell: 5.5.',
          'timestamp': 1630509844963,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.28, quantityToSell: 5.5.',
          'timestamp': 1630509905138,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.16, quantityToSell: 5.5.',
          'timestamp': 1630509964800,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.13, quantityToSell: 5.5.',
          'timestamp': 1630510024791,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.18, quantityToSell: 5.5.',
          'timestamp': 1630510085216,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.54, quantityToSell: 5.5.',
          'timestamp': 1630510145063,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.54, quantityToSell: 5.5.',
          'timestamp': 1630510205496,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.45, quantityToSell: 5.5.',
          'timestamp': 1630510265030,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.34, quantityToSell: 5.5.',
          'timestamp': 1630510324729,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.58, quantityToSell: 5.5.',
          'timestamp': 1630510384781,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.45, quantityToSell: 5.5.',
          'timestamp': 1630510444579,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.35, quantityToSell: 5.5.',
          'timestamp': 1630510504503,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.22, quantityToSell: 5.5.',
          'timestamp': 1630510564911,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.24, quantityToSell: 5.5.',
          'timestamp': 1630510625946,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.28, quantityToSell: 5.5.',
          'timestamp': 1630510684900,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.19, quantityToSell: 5.5.',
          'timestamp': 1630510744673,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.22, quantityToSell: 5.5.',
          'timestamp': 1630510804884,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.41, quantityToSell: 5.5.',
          'timestamp': 1630510865003,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.25, quantityToSell: 5.5.',
          'timestamp': 1630510924676,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.25, quantityToSell: 5.5.',
          'timestamp': 1630510984838,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.24, quantityToSell: 5.5.',
          'timestamp': 1630511044501,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.25, quantityToSell: 5.5.',
          'timestamp': 1630511105338,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.32, quantityToSell: 5.5.',
          'timestamp': 1630511165448,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.21, quantityToSell: 5.5.',
          'timestamp': 1630511225038,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.97, quantityToSell: 5.5.',
          'timestamp': 1630511285177,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.98, quantityToSell: 5.5.',
          'timestamp': 1630511346020,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.05, quantityToSell: 5.5.',
          'timestamp': 1630511404794,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.02, quantityToSell: 5.5.',
          'timestamp': 1630511464740,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.08, quantityToSell: 5.5.',
          'timestamp': 1630511524664,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.92, quantityToSell: 5.5.',
          'timestamp': 1630511584889,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630511645108,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.96, quantityToSell: 5.5.',
          'timestamp': 1630511704654,
        },
        {
          'event':
            'Error selling on Target1 at price: 77, quantityToSell: 5.5.',
          'timestamp': 1630511764782,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.07, quantityToSell: 5.5.',
          'timestamp': 1630511824998,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.17, quantityToSell: 5.5.',
          'timestamp': 1630511884914,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.25, quantityToSell: 5.5.',
          'timestamp': 1630511944992,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.15, quantityToSell: 5.5.',
          'timestamp': 1630512004948,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.19, quantityToSell: 5.5.',
          'timestamp': 1630512064644,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.17, quantityToSell: 5.5.',
          'timestamp': 1630512125541,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.21, quantityToSell: 5.5.',
          'timestamp': 1630512184830,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.23, quantityToSell: 5.5.',
          'timestamp': 1630512244716,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.28, quantityToSell: 5.5.',
          'timestamp': 1630512305064,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.18, quantityToSell: 5.5.',
          'timestamp': 1630512364819,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.19, quantityToSell: 5.5.',
          'timestamp': 1630512424662,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.13, quantityToSell: 5.5.',
          'timestamp': 1630512484694,
        },
        {
          'event':
            'Error selling on Target1 at price: 77, quantityToSell: 5.5.',
          'timestamp': 1630512544807,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.91, quantityToSell: 5.5.',
          'timestamp': 1630512604668,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.89, quantityToSell: 5.5.',
          'timestamp': 1630512664984,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.84, quantityToSell: 5.5.',
          'timestamp': 1630512724917,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.88, quantityToSell: 5.5.',
          'timestamp': 1630512784883,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.87, quantityToSell: 5.5.',
          'timestamp': 1630512845053,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.91, quantityToSell: 5.5.',
          'timestamp': 1630512904622,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.01, quantityToSell: 5.5.',
          'timestamp': 1630512964911,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.01, quantityToSell: 5.5.',
          'timestamp': 1630513024516,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.04, quantityToSell: 5.5.',
          'timestamp': 1630513084867,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.02, quantityToSell: 5.5.',
          'timestamp': 1630513144744,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.97, quantityToSell: 5.5.',
          'timestamp': 1630513204857,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.87, quantityToSell: 5.5.',
          'timestamp': 1630513265358,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.84, quantityToSell: 5.5.',
          'timestamp': 1630513924470,
        },
        {
          'event':
            'Error selling on Target1 at price: 76.9, quantityToSell: 5.5.',
          'timestamp': 1630513984757,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.03, quantityToSell: 5.5.',
          'timestamp': 1630514044880,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.22, quantityToSell: 5.5.',
          'timestamp': 1630514105895,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.35, quantityToSell: 5.5.',
          'timestamp': 1630514164780,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.28, quantityToSell: 5.5.',
          'timestamp': 1630514224714,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.33, quantityToSell: 5.5.',
          'timestamp': 1630514284809,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.46, quantityToSell: 5.5.',
          'timestamp': 1630514344862,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.43, quantityToSell: 5.5.',
          'timestamp': 1630514404854,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.5, quantityToSell: 5.5.',
          'timestamp': 1630514464629,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.51, quantityToSell: 5.5.',
          'timestamp': 1630514524552,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.58, quantityToSell: 5.5.',
          'timestamp': 1630514584619,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.56, quantityToSell: 5.5.',
          'timestamp': 1630514644917,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.69, quantityToSell: 5.5.',
          'timestamp': 1630514704546,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.71, quantityToSell: 5.5.',
          'timestamp': 1630514764919,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.81, quantityToSell: 5.5.',
          'timestamp': 1630514824687,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.84, quantityToSell: 5.5.',
          'timestamp': 1630514884887,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.71, quantityToSell: 5.5.',
          'timestamp': 1630514944818,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.49, quantityToSell: 5.5.',
          'timestamp': 1630515005073,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.74, quantityToSell: 5.5.',
          'timestamp': 1630515065278,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.84, quantityToSell: 5.5.',
          'timestamp': 1630515124670,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.83, quantityToSell: 5.5.',
          'timestamp': 1630515184553,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.7, quantityToSell: 5.5.',
          'timestamp': 1630515244663,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.61, quantityToSell: 5.5.',
          'timestamp': 1630515304516,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.64, quantityToSell: 5.5.',
          'timestamp': 1630515364644,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.52, quantityToSell: 5.5.',
          'timestamp': 1630515424755,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.54, quantityToSell: 5.5.',
          'timestamp': 1630515484902,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.6, quantityToSell: 5.5.',
          'timestamp': 1630515544579,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.69, quantityToSell: 5.5.',
          'timestamp': 1630515604619,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.5, quantityToSell: 5.5.',
          'timestamp': 1630515665593,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.4, quantityToSell: 5.5.',
          'timestamp': 1630515724891,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.46, quantityToSell: 5.5.',
          'timestamp': 1630515785210,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.38, quantityToSell: 5.5.',
          'timestamp': 1630515844580,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.54, quantityToSell: 5.5.',
          'timestamp': 1630515904965,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.45, quantityToSell: 5.5.',
          'timestamp': 1630515964878,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.44, quantityToSell: 5.5.',
          'timestamp': 1630516024535,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.55, quantityToSell: 5.5.',
          'timestamp': 1630516084444,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.61, quantityToSell: 5.5.',
          'timestamp': 1630516144501,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.59, quantityToSell: 5.5.',
          'timestamp': 1630516204708,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.77, quantityToSell: 5.5.',
          'timestamp': 1630516265008,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.93, quantityToSell: 5.5.',
          'timestamp': 1630516324916,
        },
        {
          'event':
            'Error selling on Target1 at price: 78, quantityToSell: 5.5.',
          'timestamp': 1630516384569,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.81, quantityToSell: 5.5.',
          'timestamp': 1630516444894,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.83, quantityToSell: 5.5.',
          'timestamp': 1630516504772,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.96, quantityToSell: 5.5.',
          'timestamp': 1630516565289,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.1, quantityToSell: 5.5.',
          'timestamp': 1630516624719,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.25, quantityToSell: 5.5.',
          'timestamp': 1630516684880,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.07, quantityToSell: 5.5.',
          'timestamp': 1630516744639,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.13, quantityToSell: 5.5.',
          'timestamp': 1630516804722,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.13, quantityToSell: 5.5.',
          'timestamp': 1630516865084,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.06, quantityToSell: 5.5.',
          'timestamp': 1630516924821,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.11, quantityToSell: 5.5.',
          'timestamp': 1630516985046,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.19, quantityToSell: 5.5.',
          'timestamp': 1630517044593,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.23, quantityToSell: 5.5.',
          'timestamp': 1630517104733,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.19, quantityToSell: 5.5.',
          'timestamp': 1630517165000,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.21, quantityToSell: 5.5.',
          'timestamp': 1630517224840,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.26, quantityToSell: 5.5.',
          'timestamp': 1630517284829,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.22, quantityToSell: 5.5.',
          'timestamp': 1630517344765,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.3, quantityToSell: 5.5.',
          'timestamp': 1630517405355,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.26, quantityToSell: 5.5.',
          'timestamp': 1630517464984,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.09, quantityToSell: 5.5.',
          'timestamp': 1630517524697,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.91, quantityToSell: 5.5.',
          'timestamp': 1630517584789,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.92, quantityToSell: 5.5.',
          'timestamp': 1630517644838,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.98, quantityToSell: 5.5.',
          'timestamp': 1630517704835,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.94, quantityToSell: 5.5.',
          'timestamp': 1630517765053,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.99, quantityToSell: 5.5.',
          'timestamp': 1630517824498,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.1, quantityToSell: 5.5.',
          'timestamp': 1630517884948,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.03, quantityToSell: 5.5.',
          'timestamp': 1630517944929,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.99, quantityToSell: 5.5.',
          'timestamp': 1630518005029,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.98, quantityToSell: 5.5.',
          'timestamp': 1630518065034,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.02, quantityToSell: 5.5.',
          'timestamp': 1630518124618,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.06, quantityToSell: 5.5.',
          'timestamp': 1630518185189,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.14, quantityToSell: 5.5.',
          'timestamp': 1630518245662,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.27, quantityToSell: 5.5.',
          'timestamp': 1630518305510,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.18, quantityToSell: 5.5.',
          'timestamp': 1630518364919,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.1, quantityToSell: 5.5.',
          'timestamp': 1630518425180,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.14, quantityToSell: 5.5.',
          'timestamp': 1630518484817,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.18, quantityToSell: 5.5.',
          'timestamp': 1630518545370,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.14, quantityToSell: 5.5.',
          'timestamp': 1630518604717,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.97, quantityToSell: 5.5.',
          'timestamp': 1630518665523,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.88, quantityToSell: 5.5.',
          'timestamp': 1630518725155,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.75, quantityToSell: 5.5.',
          'timestamp': 1630518785546,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.91, quantityToSell: 5.5.',
          'timestamp': 1630518845043,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.82, quantityToSell: 5.5.',
          'timestamp': 1630518905039,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.92, quantityToSell: 5.5.',
          'timestamp': 1630518964964,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.84, quantityToSell: 5.5.',
          'timestamp': 1630519024769,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.89, quantityToSell: 5.5.',
          'timestamp': 1630519084824,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.83, quantityToSell: 5.5.',
          'timestamp': 1630519145108,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.94, quantityToSell: 5.5.',
          'timestamp': 1630519204440,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.95, quantityToSell: 5.5.',
          'timestamp': 1630519264551,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.03, quantityToSell: 5.5.',
          'timestamp': 1630519566350,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.03, quantityToSell: 5.5.',
          'timestamp': 1630519567551,
        },
        {
          'event':
            'Error selling on Target1 at price: 78.03, quantityToSell: 5.5.',
          'timestamp': 1630519568329,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.93, quantityToSell: 5.5.',
          'timestamp': 1630519617060,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.89, quantityToSell: 5.5.',
          'timestamp': 1630519625135,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.91, quantityToSell: 5.5.',
          'timestamp': 1630519684903,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.86, quantityToSell: 5.5.',
          'timestamp': 1630519745010,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.83, quantityToSell: 5.5.',
          'timestamp': 1630519805193,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.75, quantityToSell: 5.5.',
          'timestamp': 1630519865193,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.68, quantityToSell: 5.5.',
          'timestamp': 1630519925544,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.58, quantityToSell: 5.5.',
          'timestamp': 1630519984792,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.58, quantityToSell: 5.5.',
          'timestamp': 1630520044898,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.62, quantityToSell: 5.5.',
          'timestamp': 1630520104864,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.58, quantityToSell: 5.5.',
          'timestamp': 1630520165233,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.5, quantityToSell: 5.5.',
          'timestamp': 1630520225268,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.46, quantityToSell: 5.5.',
          'timestamp': 1630520285173,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.41, quantityToSell: 5.5.',
          'timestamp': 1630520345425,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.5, quantityToSell: 5.5.',
          'timestamp': 1630520405956,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.54, quantityToSell: 5.5.',
          'timestamp': 1630520437536,
        },
        {
          'event':
            'Error selling on Target1 at price: 77.52, quantityToSell: 5.5.',
          'timestamp': 1630520464895,
        },
      ],
      'currency': 'FIL/USDT',
      'fulfilledTargets': [],
      children:[],
      'stoploss': 60.87,
      'entry': [76.2, 70.93, 65.49],
      'id': 'f364a846-d541-4452-950e-8b3cf1c322ec',
      'timestamp': 1630449091680,
      'transactions': [
        {
          'type': 'entry1',
          'price': 75.88,
          'quantity': 100,
        },
      ],
      'fulfilledEntries': [75.88],
      'leverage': 1,
      'market': 'binance',
      'expired': true,
      'remainingQuantity': 10,
      'target': [77.19, 81.63, 89.06],
      'position': 'buy',
    },
    {
      'quantity': 1500,
      'log': [
        {
          'event':
            'Entry1 hit; quantityToBuy: 1500, amount: 110.92213266287067, price: 13.523.',
          'timestamp': 1630707185583,
        },
        {
          'event':
            'Target1 hit at price: 14.067, remainingQuantity: 675, quantityToSell: 825.',
          'timestamp': 1630726625503,
        },
        {
          'event': 'Stoploss adjusted (1); new stoploss: 13.509.',
          'timestamp': 1630726625800,
        },
      ],
      'currency': 'QTUM/USDT',
      'fulfilledTargets': [14.059],
      children:[],
      'stoploss': 13.509,
      'entry': [13.509, 12.863, 11.773],
      'id': 'e54a5e81-a6ed-4c38-9b44-e5c1ae1c893c',
      'timestamp': 1630678186125,
      'transactions': [
        {
          'quantity': 1500,
          'type': 'entry1',
          'price': 13.523,
          'timestamp': 1630707185749,
        },
        {
          'quantity': 825,
          'type': 'target1',
          'price': 14.067,
          'timestamp': 1630726625652,
        },
      ],
      'fulfilledEntries': [13.509],
      'market': 'binance',
      'expired': false,
      'remainingQuantity': 675,
      'target': [14.059, 14.879, 16.432],
      'leverage': 1,
      'position': 'buy',
    },

    // {
    // 	id: '1',
    // 	reference: '70d4d7d0',
    // 	subtotal: '39.97',
    // 	tax: '77.44',
    // 	discount: '-10.17',
    // 	total: '73.31',
    // 	date: '2015/04/25 02:07:59',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Dollie',
    // 		lastName: 'Bullock',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 13,
    // 			name: 'On pre-order (not paid)',
    // 			color: 'purple-300',
    // 			date: '2016/04/03 10:06:18'
    // 		},
    // 		{
    // 			id: 1,
    // 			name: 'Awaiting check payment',
    // 			color: 'blue-500',
    // 			date: '2015/03/17 18:28:37'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '2a894b9e',
    // 		amount: '73.31',
    // 		method: 'Credit Card',
    // 		date: '2016/02/23 15:50:23'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'TNT',
    // 			weight: '10.44',
    // 			fee: '7.00',
    // 			date: '2015/04/10 07:03:52'
    // 		}
    // 	]
    // },
    // {
    // 	id: '2',
    // 	reference: '2003479c',
    // 	subtotal: '98.68',
    // 	tax: '45.55',
    // 	discount: '-10.25',
    // 	total: '24.51',
    // 	date: '2015/11/07 15:47:31',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Holmes',
    // 		lastName: 'Hines',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 2,
    // 			name: 'Payment accepted',
    // 			color: 'green-500',
    // 			date: '2015/10/04 08:54:33'
    // 		},
    // 		{
    // 			id: 1,
    // 			name: 'Awaiting check payment',
    // 			color: 'blue-500',
    // 			date: '2015/05/03 03:43:04'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '79c640c8',
    // 		amount: '24.51',
    // 		method: 'Check',
    // 		date: '2015/04/22 04:49:49'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '2.92',
    // 			fee: '4.00',
    // 			date: '2015/07/11 14:57:12'
    // 		}
    // 	]
    // },
    // {
    // 	id: '3',
    // 	reference: '09f5443b',
    // 	subtotal: '23.03',
    // 	tax: '16.36',
    // 	discount: '-19.46',
    // 	total: '87.17',
    // 	date: '2015/11/26 16:04:40',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Serena',
    // 		lastName: 'Glover',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 8,
    // 			name: 'Payment error',
    // 			color: 'red-900',
    // 			date: '2015/07/02 20:44:34'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Preparing the order',
    // 			color: 'orange-500',
    // 			date: '2015/03/23 04:59:45'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '5ff44b0c',
    // 		amount: '87.17',
    // 		method: 'PayPal',
    // 		date: '2016/01/25 11:46:28'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '7.53',
    // 			fee: '7.00',
    // 			date: '2015/11/25 00:40:54'
    // 		}
    // 	]
    // },
    // {
    // 	id: '4',
    // 	reference: '960898d0',
    // 	subtotal: '13.47',
    // 	tax: '53.45',
    // 	discount: '-15.55',
    // 	total: '26.98',
    // 	date: '2015/11/23 05:35:18',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Dianne',
    // 		lastName: 'Prince',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 5,
    // 			name: 'Delivered',
    // 			color: 'green-800',
    // 			date: '2015/10/26 16:12:47'
    // 		},
    // 		{
    // 			id: 4,
    // 			name: 'Shipped',
    // 			color: 'purple-500',
    // 			date: '2016/02/06 06:42:37'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '787d49b1',
    // 		amount: '26.98',
    // 		method: 'Check',
    // 		date: '2015/03/07 05:50:57'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'FedEx',
    // 			weight: '11.93',
    // 			fee: '5.00',
    // 			date: '2016/03/21 07:08:26'
    // 		}
    // 	]
    // },
    // {
    // 	id: '5',
    // 	reference: '2d7f68de',
    // 	subtotal: '46.93',
    // 	tax: '12.14',
    // 	discount: '-19.16',
    // 	total: '12.97',
    // 	date: '2015/01/13 06:21:21',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Frankie',
    // 		lastName: 'Hewitt',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 8,
    // 			name: 'Payment error',
    // 			color: 'red-900',
    // 			date: '2015/02/01 09:21:46'
    // 		},
    // 		{
    // 			id: 6,
    // 			name: 'Canceled',
    // 			color: 'pink-500',
    // 			date: '2015/11/16 04:48:32'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: 'cd8c4727',
    // 		amount: '12.97',
    // 		method: 'Bank-wire',
    // 		date: '2016/05/15 21:15:32'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '5.43',
    // 			fee: '3.00',
    // 			date: '2016/01/06 00:51:59'
    // 		}
    // 	]
    // },
    // {
    // 	id: '6',
    // 	reference: '9c991708',
    // 	subtotal: '32.55',
    // 	tax: '11.81',
    // 	discount: '-12.33',
    // 	total: '30.96',
    // 	date: '2015/01/17 04:21:08',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Cole',
    // 		lastName: 'Holcomb',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 3,
    // 			name: 'Preparing the order',
    // 			color: 'orange-500',
    // 			date: '2015/11/30 01:04:32'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Payment accepted',
    // 			color: 'green-500',
    // 			date: '2015/11/12 21:27:18'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: 'a41f4b7c',
    // 		amount: '30.96',
    // 		method: 'Check',
    // 		date: '2015/04/27 03:59:22'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'FedEx',
    // 			weight: '6.05',
    // 			fee: '4.00',
    // 			date: '2015/09/10 11:28:47'
    // 		}
    // 	]
    // },
    // {
    // 	id: '7',
    // 	reference: '7683b54d',
    // 	subtotal: '14.08',
    // 	tax: '74.96',
    // 	discount: '-16.60',
    // 	total: '63.36',
    // 	date: '2015/06/14 14:49:47',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Merrill',
    // 		lastName: 'Richardson',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 11,
    // 			name: 'Awaiting PayPal payment',
    // 			color: 'blue-500',
    // 			date: '2015/09/03 18:53:02'
    // 		},
    // 		{
    // 			id: 13,
    // 			name: 'On pre-order (not paid)',
    // 			color: 'purple-300',
    // 			date: '2015/12/13 18:14:40'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: 1974588,
    // 		amount: '63.36',
    // 		method: 'PayPal',
    // 		date: '2015/11/28 22:24:58'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'FedEx',
    // 			weight: '2.89',
    // 			fee: '3.00',
    // 			date: '2016/02/10 09:03:44'
    // 		}
    // 	]
    // },
    // {
    // 	id: '8',
    // 	reference: 'c1de0f75',
    // 	subtotal: '13.77',
    // 	tax: '55.78',
    // 	discount: '-17.20',
    // 	total: '45.74',
    // 	date: '2015/01/18 01:31:47',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Morgan',
    // 		lastName: 'Pitts',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 4,
    // 			name: 'Shipped',
    // 			color: 'purple-500',
    // 			date: '2015/04/29 07:57:43'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Preparing the order',
    // 			color: 'orange-500',
    // 			date: '2015/04/23 11:14:38'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '1e704aaf',
    // 		amount: '45.74',
    // 		method: 'Credit Card',
    // 		date: '2015/06/08 03:50:41'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '6.35',
    // 			fee: '2.00',
    // 			date: '2015/06/01 09:18:26'
    // 		}
    // 	]
    // },
    // {
    // 	id: '9',
    // 	reference: '35a4dbc6',
    // 	subtotal: '56.49',
    // 	tax: '11.44',
    // 	discount: '-17.45',
    // 	total: '15.31',
    // 	date: '2016/02/14 14:22:58',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Krista',
    // 		lastName: 'Mathis',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 12,
    // 			name: 'Remote payment accepted',
    // 			color: 'green-500',
    // 			date: '2015/07/15 15:48:00'
    // 		},
    // 		{
    // 			id: 14,
    // 			name: 'Awaiting Cash-on-delivery payment',
    // 			color: 'blue-500',
    // 			date: '2015/11/08 18:30:15'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '762c4e1a',
    // 		amount: '15.31',
    // 		method: 'Bank-wire',
    // 		date: '2015/06/19 14:52:53'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '7.93',
    // 			fee: '8.00',
    // 			date: '2015/08/25 15:18:55'
    // 		}
    // 	]
    // },
    // {
    // 	id: '10',
    // 	reference: 'a8bc5b17',
    // 	subtotal: '29.34',
    // 	tax: '87.50',
    // 	discount: '-18.11',
    // 	total: '20.97',
    // 	date: '2015/10/23 03:02:55',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Hayden',
    // 		lastName: 'Fitzgerald',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 5,
    // 			name: 'Delivered',
    // 			color: 'green-800',
    // 			date: '2016/05/02 09:53:55'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Payment accepted',
    // 			color: 'green-500',
    // 			date: '2015/07/11 05:33:31'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '3dce47a3',
    // 		amount: '20.97',
    // 		method: 'Credit Card',
    // 		date: '2015/07/28 23:53:49'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'TNT',
    // 			weight: '9.20',
    // 			fee: '2.00',
    // 			date: '2015/08/05 08:45:55'
    // 		}
    // 	]
    // },
    // {
    // 	id: '11',
    // 	reference: '54ab8191',
    // 	subtotal: '50.35',
    // 	tax: '71.75',
    // 	discount: '-10.46',
    // 	total: '72.30',
    // 	date: '2015/07/28 13:22:49',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Cotton',
    // 		lastName: 'Carlson',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 9,
    // 			name: 'On pre-order (paid)',
    // 			color: 'purple-300',
    // 			date: '2016/02/26 14:15:38'
    // 		},
    // 		{
    // 			id: 4,
    // 			name: 'Shipped',
    // 			color: 'purple-500',
    // 			date: '2015/10/17 03:32:39'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: 'f4154419',
    // 		amount: '72.30',
    // 		method: 'PayPal',
    // 		date: '2016/03/07 15:10:12'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '2.81',
    // 			fee: '7.00',
    // 			date: '2016/05/01 11:15:22'
    // 		}
    // 	]
    // },
    // {
    // 	id: '12',
    // 	reference: '6919050',
    // 	subtotal: '81.95',
    // 	tax: '22.44',
    // 	discount: '-10.89',
    // 	total: '42.54',
    // 	date: '2015/06/07 17:54:36',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Kaye',
    // 		lastName: 'Baldwin',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 10,
    // 			name: 'Awaiting bank wire payment',
    // 			color: 'blue-500',
    // 			date: '2015/09/01 20:50:07'
    // 		},
    // 		{
    // 			id: 12,
    // 			name: 'Remote payment accepted',
    // 			color: 'green-500',
    // 			date: '2016/02/13 21:19:04'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: 44464979,
    // 		amount: '42.54',
    // 		method: 'Credit Card',
    // 		date: '2015/06/30 11:59:49'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'FedEx',
    // 			weight: '5.52',
    // 			fee: '2.00',
    // 			date: '2015/03/15 07:08:37'
    // 		}
    // 	]
    // },
    // {
    // 	id: '13',
    // 	reference: '1d4e89f0',
    // 	subtotal: '67.10',
    // 	tax: '46.96',
    // 	discount: '-11.64',
    // 	total: '97.49',
    // 	date: '2016/02/06 13:26:55',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Iva',
    // 		lastName: 'Clark',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 6,
    // 			name: 'Canceled',
    // 			color: 'pink-500',
    // 			date: '2015/03/31 03:01:12'
    // 		},
    // 		{
    // 			id: 8,
    // 			name: 'Payment error',
    // 			color: 'red-900',
    // 			date: '2016/03/11 18:53:35'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '2aef4aa3',
    // 		amount: '97.49',
    // 		method: 'Check',
    // 		date: '2015/05/13 13:28:52'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'TNT',
    // 			weight: '5.37',
    // 			fee: '6.00',
    // 			date: '2015/04/22 01:48:15'
    // 		}
    // 	]
    // },
    // {
    // 	id: '14',
    // 	reference: 'd897564e',
    // 	subtotal: '55.50',
    // 	tax: '48.92',
    // 	discount: '-18.45',
    // 	total: '16.95',
    // 	date: '2016/01/17 04:23:11',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Shauna',
    // 		lastName: 'Rosales',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 7,
    // 			name: 'Refunded',
    // 			color: 'red-500',
    // 			date: '2015/12/29 15:34:46'
    // 		},
    // 		{
    // 			id: 11,
    // 			name: 'Awaiting PayPal payment',
    // 			color: 'blue-500',
    // 			date: '2015/07/14 19:10:43'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: 'b7ea43c9',
    // 		amount: '16.95',
    // 		method: 'PayPal',
    // 		date: '2015/07/11 07:18:06'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'TNT',
    // 			weight: '6.49',
    // 			fee: '6.00',
    // 			date: '2015/01/05 13:42:13'
    // 		}
    // 	]
    // },
    // {
    // 	id: '15',
    // 	reference: '1a803de2',
    // 	subtotal: '13.73',
    // 	tax: '64.42',
    // 	discount: '-19.64',
    // 	total: '20.34',
    // 	date: '2015/09/26 14:26:33',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Carroll',
    // 		lastName: 'Dotson',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 1,
    // 			name: 'Awaiting check payment',
    // 			color: 'blue-500',
    // 			date: '2015/12/21 10:42:21'
    // 		},
    // 		{
    // 			id: 6,
    // 			name: 'Canceled',
    // 			color: 'pink-500',
    // 			date: '2016/02/11 05:58:55'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '0633458c',
    // 		amount: '20.34',
    // 		method: 'Check',
    // 		date: '2015/07/17 20:54:14'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'TNT',
    // 			weight: '3.30',
    // 			fee: '2.00',
    // 			date: '2015/11/04 14:08:16'
    // 		}
    // 	]
    // },
    // {
    // 	id: '16',
    // 	reference: '7d90eaa6',
    // 	subtotal: '99.07',
    // 	tax: '31.36',
    // 	discount: '-18.23',
    // 	total: '10.64',
    // 	date: '2015/08/10 14:28:10',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Jeannie',
    // 		lastName: 'Reese',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 9,
    // 			name: 'On pre-order (paid)',
    // 			color: 'purple-300',
    // 			date: '2015/06/20 08:37:46'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Payment accepted',
    // 			color: 'green-500',
    // 			date: '2015/01/01 01:42:21'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '45f7440a',
    // 		amount: '10.64',
    // 		method: 'PayPal',
    // 		date: '2015/11/23 11:14:47'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '9.94',
    // 			fee: '6.00',
    // 			date: '2016/04/30 19:17:39'
    // 		}
    // 	]
    // },
    // {
    // 	id: '17',
    // 	reference: 'cf9b4bfc',
    // 	subtotal: '96.93',
    // 	tax: '74.32',
    // 	discount: '-12.63',
    // 	total: '27.06',
    // 	date: '2015/11/10 16:54:11',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Dena',
    // 		lastName: 'Rowe',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 5,
    // 			name: 'Delivered',
    // 			color: 'green-800',
    // 			date: '2015/03/23 00:18:52'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Preparing the order',
    // 			color: 'orange-500',
    // 			date: '2015/03/22 04:48:12'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '966f4c8e',
    // 		amount: '27.06',
    // 		method: 'PayPal',
    // 		date: '2015/07/10 17:22:44'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'FedEx',
    // 			weight: '6.81',
    // 			fee: '3.00',
    // 			date: '2015/01/23 07:31:46'
    // 		}
    // 	]
    // },
    // {
    // 	id: '18',
    // 	reference: '07a938c4',
    // 	subtotal: '67.73',
    // 	tax: '33.33',
    // 	discount: '-12.33',
    // 	total: '91.50',
    // 	date: '2015/08/26 16:24:38',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Blankenship',
    // 		lastName: 'Lynch',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 6,
    // 			name: 'Canceled',
    // 			color: 'pink-500',
    // 			date: '2016/03/24 22:56:35'
    // 		},
    // 		{
    // 			id: 4,
    // 			name: 'Shipped',
    // 			color: 'purple-500',
    // 			date: '2016/04/09 13:33:26'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '411a4e97',
    // 		amount: '91.50',
    // 		method: 'PayPal',
    // 		date: '2016/02/05 05:35:52'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '6.11',
    // 			fee: '7.00',
    // 			date: '2015/10/20 10:46:31'
    // 		}
    // 	]
    // },
    // {
    // 	id: '19',
    // 	reference: 'd460f4ff',
    // 	subtotal: '15.83',
    // 	tax: '41.90',
    // 	discount: '-16.54',
    // 	total: '47.99',
    // 	date: '2015/01/04 21:13:53',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Whitley',
    // 		lastName: 'Mcgee',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 7,
    // 			name: 'Refunded',
    // 			color: 'red-500',
    // 			date: '2015/08/10 17:14:57'
    // 		},
    // 		{
    // 			id: 5,
    // 			name: 'Delivered',
    // 			color: 'green-800',
    // 			date: '2016/03/30 01:38:14'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '761943c2',
    // 		amount: '47.99',
    // 		method: 'PayPal',
    // 		date: '2015/10/11 20:10:46'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '5.51',
    // 			fee: '5.00',
    // 			date: '2015/08/28 21:24:36'
    // 		}
    // 	]
    // },
    // {
    // 	id: '20',
    // 	reference: 'ba6a946d',
    // 	subtotal: '36.84',
    // 	tax: '20.12',
    // 	discount: '-14.57',
    // 	total: '44.40',
    // 	date: '2015/02/24 00:57:18',
    // 	customer: {
    // 		id: 1,
    // 		firstName: 'Hood',
    // 		lastName: 'Hodges',
    // 		avatar: 'assets/images/avatars/Abbott.jpg',
    // 		company: 'Saois',
    // 		jobTitle: 'Digital Archivist',
    // 		email: 'abbott@withinpixels.com',
    // 		phone: '+1-202-555-0175',
    // 		invoiceAddress: {
    // 			address: '704 6th Ave, New York, NY 10010, USA',
    // 			lat: 40.7424739,
    // 			lng: -73.99283919999999
    // 		},
    // 		shippingAddress: {
    // 			address: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    // 			lat: 41.2183223,
    // 			lng: -95.8420876
    // 		}
    // 	},
    // 	products: [
    // 		{
    // 			id: 1,
    // 			name: 'A Walk Amongst Friends - Canvas Print',
    // 			price: '10.24',
    // 			quantity: 1,
    // 			total: '10.24',
    // 			image: 'assets/images/ecommerce/a-walk-amongst-friends.jpg'
    // 		},
    // 		{
    // 			id: 2,
    // 			name: 'Lago di Braies - Canvas Print',
    // 			price: '24.62',
    // 			quantity: 1,
    // 			total: '24.62',
    // 			image: 'assets/images/ecommerce/lago-di-braies.jpg'
    // 		},
    // 		{
    // 			id: 3,
    // 			name: 'Never Stop Changing - Canvas Print',
    // 			price: '49.29',
    // 			quantity: 1,
    // 			total: '49.29',
    // 			image: 'assets/images/ecommerce/never-stop-changing.jpg'
    // 		}
    // 	],
    // 	status: [
    // 		{
    // 			id: 10,
    // 			name: 'Awaiting bank wire payment',
    // 			color: 'blue-500',
    // 			date: '2015/05/19 11:09:56'
    // 		},
    // 		{
    // 			id: 12,
    // 			name: 'Remote payment accepted',
    // 			color: 'green-500',
    // 			date: '2015/03/27 05:02:33'
    // 		}
    // 	],
    // 	payment: {
    // 		transactionId: '4af94368',
    // 		amount: '44.40',
    // 		method: 'PayPal',
    // 		date: '2015/11/11 14:25:39'
    // 	},
    // 	shippingDetails: [
    // 		{
    // 			tracking: '',
    // 			carrier: 'USPS',
    // 			weight: '3.63',
    // 			fee: '5.00',
    // 			date: '2016/03/01 09:07:49'
    // 		}
    // 	]
    // }
  ],
};

mock.onGet('/api/e-commerce-app/products').reply(() => {
  return [200, eCommerceDB.products];
});

mock.onPost('/api/e-commerce-app/remove-products').reply((request) => {
  const { productIds } = JSON.parse(request.data);
  eCommerceDB.products = eCommerceDB.products.filter(
    (product) => !productIds.includes(product.id)
  );
  return [200, productIds];
});

mock.onPost('/api/e-commerce-app/remove-product').reply((request) => {
  const { id } = JSON.parse(request.data);
  eCommerceDB.products = eCommerceDB.products.filter(
    (product) => id !== product.id
  );
  return [200, id];
});

mock.onGet('/api/e-commerce-app/product').reply((request) => {
  const { productId } = request.params;
  const response = _.find(eCommerceDB.products, { id: productId });
  return [200, response];
});

mock.onPost('/api/e-commerce-app/product/save').reply((request) => {
  const data = JSON.parse(request.data);
  let product = null;

  eCommerceDB.products = eCommerceDB.products.map((_product) => {
    if (_product.id === data.id) {
      product = data;
      return product;
    }
    return _product;
  });

  if (!product) {
    product = data;
    eCommerceDB.products = [...eCommerceDB.products, product];
  }

  return [200, product];
});

mock.onGet('/api/e-commerce-app/orders').reply(() => {
  return [200, eCommerceDB.orders];
});

mock.onPost('/api/e-commerce-app/remove-orders').reply((request) => {
  const { orderIds } = JSON.parse(request.data);
  eCommerceDB.orders = eCommerceDB.orders.filter(
    (order) => !orderIds.includes(order.id)
  );
  return [200, orderIds];
});

mock.onGet('/api/e-commerce-app/order').reply((request) => {
  const { orderId } = request.params;
  const response = _.find(eCommerceDB.orders, { id: orderId });
  return [200, response];
});
