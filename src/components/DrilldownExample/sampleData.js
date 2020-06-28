import React from 'react';
import { DrilldownButton, DrilldownLink } from 'react-drilldown';
import { keyBy } from 'lodash/fp';

// const newStructure = ({ onSelect }) => ({
//     name: 'foodType',
//     title: 'Choose a Food Type',
//     parent: null,
//     children: [
//         {
//             name: 'healthy',
//             title: 'Healthy Foods',
//             parent: 'foodType',
//             children: [
//                 {
//                     name: 'healthyFruits',
//                     title: 'Healthy Fruits',
//                     parent: 'healthy',
//                     children: [
//                         {
//                             name: 'apple',
//                             title: null,
//                             parent: 'healthyFruits',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Apple</DrilldownLink>,
//                         },
//                         {
//                             name: 'banana',
//                             title: null,
//                             parent: 'healthyFruits',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Banana</DrilldownLink>,
//                         },
//                         {
//                             name: 'watermelon',
//                             title: null,
//                             parent: 'healthyFruits',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Watermelon</DrilldownLink>,
//                         },
//                     ],
//                     component: () => (
//                         <DrilldownButton onClick={() => onSelect('healthyFruits')}>Fruits</DrilldownButton>
//                     ),
//                 },

//                 {
//                     name: 'healthyVegetables',
//                     title: 'Healthy Veges',
//                     parent: 'healthy',
//                     children: [
//                         {
//                             name: 'carrot',
//                             title: null,
//                             parent: 'healthyVegetables',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Carrot</DrilldownLink>,
//                         },
//                         {
//                             name: 'pumpkin',
//                             title: null,
//                             parent: 'healthyVegetables',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Pumpkin</DrilldownLink>,
//                         },
//                         {
//                             name: 'broccoli',
//                             title: null,
//                             parent: 'healthyVegetables',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Broccoli</DrilldownLink>,
//                         },
//                     ],
//                     component: () => (
//                         <DrilldownButton onClick={() => onSelect('healthyVegetables')}>Vegetables</DrilldownButton>
//                     ),
//                 },

//                 {
//                     name: 'healthyGrains',
//                     title: 'Healthy Grains',
//                     parent: 'healthy',
//                     children: [
//                         {
//                             name: 'rice',
//                             title: null,
//                             parent: 'healthyGrains',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Rice</DrilldownLink>,
//                         },
//                     ],
//                     component: () => <DrilldownButton onClick={() => onSelect('healthyGrains')}>Rice</DrilldownButton>,
//                 },
//             ],
//             component: () => <DrilldownButton onClick={() => onSelect('healthy')}>Healthy</DrilldownButton>,
//         },
//         {
//             name: 'unhealthy',
//             title: 'Unhealthy Foods',
//             parent: 'foodType',
//             children: [
//                 {
//                     name: 'unhealthyCandy',
//                     title: 'Unhealthy Candy',
//                     parent: 'unhealthy',
//                     children: [
//                         {
//                             name: 'jellybeans',
//                             title: null,
//                             parent: 'unhealthyCandy',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Jellybeans</DrilldownLink>,
//                         },
//                         {
//                             name: 'chocolate',
//                             title: null,
//                             parent: 'unhealthyCandy',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Chocolate</DrilldownLink>,
//                         },
//                         {
//                             name: 'licorice',
//                             title: null,
//                             parent: 'unhealthyCandy',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Licorice</DrilldownLink>,
//                         },
//                     ],
//                     component: () => (
//                         <DrilldownButton onClick={() => onSelect('unhealthyCandy')}>Candy</DrilldownButton>
//                     ),
//                 },

//                 {
//                     name: 'unhealthyFastFood',
//                     title: 'Unhealthy Fast Food',
//                     parent: 'unhealthy',
//                     children: [
//                         {
//                             name: 'burgers',
//                             title: null,
//                             parent: 'unhealthyFastFood',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Burgers</DrilldownLink>,
//                         },
//                         {
//                             name: 'burritos',
//                             title: null,
//                             parent: 'unhealthyFastFood',
//                             children: [],
//                             component: () => <DrilldownLink href="#">Burritos</DrilldownLink>,
//                         },
//                     ],
//                     component: () => (
//                         <DrilldownButton onClick={() => onSelect('unhealthyFastFood')}>Fast Food</DrilldownButton>
//                     ),
//                 },
//             ],
//             component: () => <DrilldownButton onClick={() => onSelect('unhealthy')}>Unhealthy</DrilldownButton>,
//         },
//     ],
// });
const sampleData = ({ onSelect }) =>
    keyBy('name', [
        {
            name: 'foodType',
            title: 'Choose a Food Type',
            parent: null,
            children: ['healthy', 'unhealthy'],
        },
        {
            name: 'healthy',
            title: 'Healthy Foods',
            parent: 'foodType',
            children: ['healthyFruits', 'healthyVegetables', 'healthyGrains'],
            component: () => <DrilldownButton onClick={() => onSelect('healthy')}>Healthy</DrilldownButton>,
        },
        {
            name: 'unhealthy',
            title: 'Unhealthy Foods',
            parent: 'foodType',
            children: ['unhealthyCandy', 'unhealthyFastFood'],
            component: () => <DrilldownButton onClick={() => onSelect('unhealthy')}>Unhealthy</DrilldownButton>,
        },
        {
            name: 'healthyFruits',
            title: 'Fruits 🍎',
            parent: 'healthy',
            children: ['apple', 'banana', 'watermelon'],
            component: () => <DrilldownButton onClick={() => onSelect('healthyFruits')}>Fruits 🍎</DrilldownButton>,
        },
        {
            name: 'apple',
            title: null,
            parent: 'healthyFruits',
            children: [],
            component: () => <DrilldownLink href="#">Apple</DrilldownLink>,
        },
        {
            name: 'banana',
            title: null,
            parent: 'healthyFruits',
            children: [],
            component: () => <DrilldownLink href="#">Banana</DrilldownLink>,
        },
        {
            name: 'watermelon',
            title: null,
            parent: 'healthyFruits',
            children: [],
            component: () => <DrilldownLink href="#">Watermelon</DrilldownLink>,
        },
        {
            name: 'healthyVegetables',
            title: 'Vegetables 🎃',
            parent: 'healthy',
            children: ['carrot', 'pumpkin', 'broccoli'],
            component: () => (
                <DrilldownButton onClick={() => onSelect('healthyVegetables')}>Vegetables <span aria-label="pumpkin emoji" role="img">🎃</span></DrilldownButton>
            ),
        },
        {
            name: 'carrot',
            title: null,
            parent: 'healthyVegetables',
            children: [],
            component: () => <DrilldownLink href="#">Carrot</DrilldownLink>,
        },
        {
            name: 'pumpkin',
            title: null,
            parent: 'healthyVegetables',
            children: [],
            component: () => <DrilldownLink href="#">Pumpkin</DrilldownLink>,
        },
        {
            name: 'broccoli',
            title: null,
            parent: 'healthyVegetables',
            children: [],
            component: () => <DrilldownLink href="#">Broccoli</DrilldownLink>,
        },
        {
            name: 'healthyGrains',
            title: 'Grains 🍚',
            parent: 'healthy',
            children: ['rice'],
            component: () => <DrilldownButton onClick={() => onSelect('healthyGrains')}>Grains 🍚</DrilldownButton>,
        },
        {
            name: 'rice',
            title: null,
            parent: 'healthyGrains',
            children: [],
            component: () => <DrilldownLink href="#">Rice</DrilldownLink>,
        },
        {
            name: 'unhealthyCandy',
            title: 'Candy',
            parent: 'unhealthy',
            children: ['bonbons', 'chocolate', 'donuts'],
            component: () => <DrilldownButton onClick={() => onSelect('unhealthyCandy')}>Candy 🍭</DrilldownButton>,
        },
        {
            name: 'bonbons',
            title: null,
            parent: 'unhealthyCandy',
            children: [],
            component: () => <DrilldownLink href="#">Bonbons 🍬</DrilldownLink>,
        },
        {
            name: 'chocolate',
            title: null,
            parent: 'unhealthyCandy',
            children: [],
            component: () => <DrilldownLink href="#">Chocolate 🍫</DrilldownLink>,
        },
        {
            name: 'donuts',
            title: null,
            parent: 'unhealthyCandy',
            children: [],
            component: () => <DrilldownLink href="#">Donuts 🍩</DrilldownLink>,
        },
        {
            name: 'unhealthyFastFood',
            title: 'Unhealthy Fast Food',
            parent: 'unhealthy',
            children: ['burgers', 'burritos'],
            component: () => <DrilldownButton onClick={() => onSelect('unhealthyFastFood')}>Fast Food</DrilldownButton>,
        },
        {
            name: 'burgers',
            title: null,
            parent: 'unhealthyFastFood',
            children: [],
            component: () => <DrilldownLink href="#">Burgers</DrilldownLink>,
        },
        {
            name: 'burritos',
            title: null,
            parent: 'unhealthyFastFood',
            children: [],
            component: () => <DrilldownLink href="#">Burritos</DrilldownLink>,
        },
    ]);
export { sampleData };
