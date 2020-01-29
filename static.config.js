import React, { Component } from 'react'
import axios from 'axios'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export default {
  getRoutes: async () => {
    const { data: posts } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return [
      {
        path: '/',
        component: 'src/containers/Home',
      },
      {
        path: '/about',
        component: 'src/containers/About',
      },
      {
        path: '/about-also',
        component: 'src/containers/AboutAlso',
      },
      {
        path: '/blog',
        component: 'src/containers/BlogPerspectives',
      },
      {
        path: '/post',
        component: 'src/containers/BlogPost',
      },
      {
        path: '/careers',
        component: 'src/containers/Careers',
      },
      {
        path: '/career',
        component: 'src/containers/CareerDescription',
      },
      {
        path: '/contact',
        component: 'src/containers/Contact',
      },
      {
        path: '/get-started',
        component: 'src/containers/GetStarted',
      },
      {
        path: '/login',
        component: 'src/containers/Login',
      },
      {
        path: '/platform-acquire',
        component: 'src/containers/PlatformAcquire',
      },
      {
        path: '/platform-distribute',
        component: 'src/containers/PlatformDistribute',
      },
      // {
      //   path: '/pricing',
      //   component: 'src/containers/Pricing',
      // },
      {
        path: '/pricing-distribute',
        component: 'src/containers/PricingDistribute',
      },
      {
        path: '/pricing-acquire',
        component: 'src/containers/PricingAcquire',
      },
      // {
      //   path: '/pricing-cta',
      //   component: 'src/containers/PricingCta',
      // },
      {
        path: '/pricing-distribute-basic',
        component: 'src/containers/PricingCtaDistributeBasic',
      },
      {
        path: '/pricing-distribute-standard',
        component: 'src/containers/PricingCtaDistributeStandard',
      },
      {
        path: '/pricing-distribute-enterprise',
        component: 'src/containers/PricingCtaDistributeEnterprise',
      },
      {
        path: '/pricing-acquire-basic',
        component: 'src/containers/PricingCtaAcquireBasic',
      },
      {
        path: '/pricing-acquire-standard',
        component: 'src/containers/PricingCtaAcquireStandard',
      },
      {
        path: '/pricing-acquire-enterprise',
        component: 'src/containers/PricingCtaAcquireEnterprise',
      },
      {
        path: '/privacy',
        component: 'src/containers/PrivacyPolicy',
      },
      {
        path: '/solution',
        component: 'src/containers/SolutionGeneral',
        children: [
          {
            path: '/data-science',
            component: 'src/containers/SolutionDataScience'
          },
          {
            path: '/marketing',
            component: 'src/containers/SolutionMarketing'
          },
          {
            path: '/legal',
            component: 'src/containers/SolutionLegal'
          },
          {
            path: '/partnerships',
            component: 'src/containers/SolutionPartnerships'
          },
          {
            path: '/business-intelligence',
            component: 'src/containers/SolutionBusinessIntelligence'
          },
          {
            path: '/data-engineering',
            component: 'src/containers/SolutionDataEngineering'
          },
          {
            path: '/sales',
            component: 'src/containers/SolutionSales'
          },
          {
            path: '/product-management',
            component: 'src/containers/SolutionProductManagement'
          },
        ]
      },
      {
        path: '/terms',
        component: 'src/containers/TermsOfService',
      },
      {
        path: '/thanks',
        component: 'src/containers/ThankYou',
      },
      {
        is404: true,
        component: 'src/containers/404',
      },
    ]
  },
  Document: class CustomHTML extends Component {
    render() {
      const { Html, Head, Body, children, renderMeta } = this.props

      return (
        <Html lang="en-US">
          <Head>
            {/* <link rel='shortcut icon' type='image/png' href='/favicon.png' /> */}
            <meta name="viewport" content="maximum-scale=1.0,width=device-width,initial-scale=1.0,user-scalable=0" />
            <link rel="icon" type="image/png" href="/favicon.png" />
          </Head>
          <Body>
            {children}
          </Body>
        </Html>
      )
    }
  },
  webpack: [
    (config, { defaultLoaders, stage }) => {
      if (stage === 'prod') {
        config.entry = ['babel-polyfill', 'intersection-observer', config.entry]
      } else if (stage === 'dev') {
        config.entry = ['babel-polyfill', 'intersection-observer', ...config.entry]
      }

      let loaders = []

    if (stage === 'dev') {
      loaders = [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }]
    } else {
      loaders = [
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: stage === 'prod',
            sourceMap: false,
            // modules: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            ident: 'postcss',
            plugins: (loader) => [
              require('postcss-cssnext')(),
              ],
            }
        },
        {
          loader: 'sass-loader',
          options: { includePaths: ['src/'] },
        },
      ]

      // Don't extract css to file during node build process
      if (stage !== 'node') {
        loaders = ExtractTextPlugin.extract({
          fallback: {
            loader: 'style-loader',
            options: {
              sourceMap: false,
              hmr: false,
            },
          },
          use: loaders,
        })
      }
    }

    config.module.rules = [
      {
        oneOf: [
          {
            test: /\.s(a|c)ss$/,
            use: loaders,
          },
          defaultLoaders.cssLoader,
          defaultLoaders.jsLoader,
          defaultLoaders.fileLoader,
        ],
      },
    ]
    return config
    },
    (config) => {
      config.plugins.push(new CopyWebpackPlugin(
        [
          { from: '../../../copystatic/' }
        ]
      ))
      return config
    }
  ]
}
