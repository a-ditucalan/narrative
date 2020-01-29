import React, { Component } from 'react'
//
import Pricing from '../reusables/pricing'

const pricingCardsData = [
  {
    title: "Basic",
    price: "Free",
    subtext: "15% marketplace fee",
    button: "Get Started",
    description:
      "Brief description of who would use the free pricing tier lorem ipsum dolor sit amer consectetur.",
    keyletter: 'b',
    link: '/pricing-distribute-basic'
  },
  {
    title: "Standard",
    price: "$5000 /mo.",
    subtext: "10% marketplace fee",
    button: "Buy Standard",
    description:
      "Brief description of who would use the standard pricing tier a little longer lorem ipsum dolor sit amer consectetur.",
    keyletter: 's',
    link: '/pricing-distribute-standard'
  },
  {
    title: "Enterprise",
    price: "Contact us",
    subtext: "5% marketplace fee",
    button: "Get a quote",
    description:
      "Brief description of who would use the enterprise pricing tier even longer than the last description, lorem ipsum dolor sit amer consectetur.",
    keyletter: 'e',
    link: '/pricing-distribute-enterprise'
  }
]

const pricingTableData = [
  {
    category: 'Discovery',
    description: 'Discovery',
    data: [
      {
        feature: 'Data at individual record and source level ; no segments',
        description: 'Data at individual record and source level ; no segments',
        b: true,
        s: true,
        e: true,
      },
      {
        feature: 'Search + Filtering by Data Source + Collection Details + Type + Attribute',
        description: 'Search + Filtering by Data Source + Collection Details + Type + Attribute',
        b: true,
        s: true,
        e: true,
      },
      {
        feature: 'Partner List Overlap and Forecasts',
        description: 'Partner List Overlap and Forecasts',
        b: '3/mo',
        s: 'Unlimited',
        e: 'Unlimited',
      },
      {
        feature: 'Representative Sample',
        description: 'Representative Sample',
        s: '0.01%',
        e: '1%',
      },
      {
        feature: 'Algorithmic Discovery: New Data Types + Attributes',
        description: 'Algorithmic Discovery: New Data Types + Attributes',
        s: true,
        e: true,
      },
      {
        feature: 'Truth Set Validation',
        description: 'Truth Set Validation',
        e: true,
      },
    ]
  },
  {
    category: 'Transactions',
    description: 'Transactions',
    data: [
      {
        feature: 'Full Transparency Between Buyers and Sellers',
        description: 'Full Transparency Between Buyers and Sellers',
        b: true,
        s: true,
        e: true
      },
      {
        feature: 'Multi-Data Type Transactions',
        description: 'Multi-Data Type Transactions',
        s: true,
        e: true
      },
      {
        feature: 'Bring Your Own Data Agreements',
        description: 'Bring Your Own Data Agreements',
        e: true
      },
    ]
  },
  {
    category: 'Customization + Controls',
    description: 'Customization + Controls',
    data: [
      {
        feature: 'Data Clean Room',
        description: 'Data Clean Room',
        b: true,
        s: true,
        e: true
      },
      {
        feature: 'Standardization + Deduplication Across Data Types and Sources',
        description: 'Standardization + Deduplication Across Data Types and Sources',
        b: true,
        s: true,
        e: true
      },
      {
        feature: 'Custom Data Types and IDs Supported',
        description: 'Custom Data Types and IDs Supported',
        s: true,
        e: true
      },  
      {
        feature: 'Deterministic ID Graph',
        description: 'Deterministic ID Graph',
        s: true,
        e: true
      },      
      {
        feature: 'ID Conversion and Privacy Anonymization',
        description: 'ID Conversion and Privacy Anonymization',
        e: true
      },      
      {
        feature: 'Data Decoration and Hierarchies/Categorization',
        description: 'Data Decoration and Hierarchies/Categorization',
        e: true
      },      
    ]
  },
  {
    category: 'Analytics',
    description: 'Analytics',
    data: [
      {
        feature: 'Transaction Reporting',
        description: 'Transaction Reporting',
        b: true,
        s: true,
        e: true
      },
      {
        feature: 'Price & Yield Optimization Tools',
        description: 'Price & Yield Optimization Tools',
        s: true,
        e: true
      },
      {
        feature: 'Price & Yield Scenario Tools',
        description: 'Price & Yield Scenario Tools',
        e: true
      },
      {
        feature: 'BYO Modeling',
        description: 'BYO Modeling',
        e: true
      },
    ]
  },
  {
    category: 'Integrations',
    description: 'Integrations',
    data: [
      {
        feature: 'CDP / DMPs',
        description: 'CDP / DMPs',
        s: '3 new integrations',
        e: '10 new integrations'
      },
      {
        feature: 'DSPs',
        description: 'DSPs',
        s: '3 new integrations',
        e: '10 new integrations'
      },
      {
        feature: 'Social Platforms',
        description: 'Social Platforms',
        s: '3 new integrations',
        e: '10 new integrations'
      },
      {
        feature: 'Cloud Storage (AWS, Google Cloud, Azure)',
        description: 'Cloud Storage (AWS, Google Cloud, Azure)',
        b: true,
        s: true,
        e: true
      },
      {
        feature: 'Custom API + Real-TIme Integrations',
        description: 'Custom API + Real-TIme Integrations',
        e: true
      },
    ]
  },
  {
    category: 'SLA',
    description: 'SLA',
    data: [
      {
        feature: 'Email Alias',
        description: 'Email Alias',
        b: true,
        s: true,
        e: true
      },
      {
        feature: 'Dedicated Support',
        description: 'Dedicated Support',
        s: true,
        e: true
      },
      {
        feature: 'Dedicated Slack Channel',
        description: 'Dedicated Slack Channel',
        e: true
      },
    ]
  },
  {
    category: 'Managed (people)',
    description: 'Managed (people)',
    data: [
      {
        feature: 'Custom Modeling + Analytics',
        description: 'Custom Modeling + Analytics',
        s: '5hrs/mo',
        e: '10+ hrs/mo'
      },
      {
        feature: 'Custom New Integrations',
        description: 'Custom New Integrations',
        e: '10+ hrs/mo'
      },
      {
        feature: 'Supplier Sourcing + Due Diligence + Integrations',
        description: 'Supplier Sourcing + Due Diligence + Integrations',
        e: '10+ hrs/mo'
      },
    ]
  },
]

const questionsData = [
  {
    header: "Lorem ipsum dolor sit amer consectetur?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    header: "Que laudantium, totam rem aperiam, eaque ipsa quae ab?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    header: "Nemo enim ipsam voluptatem quia voluptas sit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    header: "Lorem ipsum dolro sit amet consectetur?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  },
  {
    header:
      "Eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
  }
]
export default class PricingDistribute extends Component {
  render() {
    return (
      <Pricing pricingCardsData={pricingCardsData}
        pricingTableData={pricingTableData}
        questionsData={questionsData}
        pricingType="distribute" />
    )
  }
}
