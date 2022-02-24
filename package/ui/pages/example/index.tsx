import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "@douyinfe/semi-ui";
import styles from "@/styles/layout.module.css";
import { MaterialBasicProduct, MaterialContainerProvider, MaterialRenderCanvas, MaterialConfiguration } from '@moyu-code/control'
import * as Components from 'antd-mobile'


const { Content } = Layout;

const Example: NextPage = () => {

  /** @name dslView 页面结构 */

  return (
    <Layout className={styles["app"]}>
      <Head>
        <title>example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MaterialContainerProvider>
        <MaterialBasicProduct/>
        <MaterialRenderCanvas materialComponents={{
          ...(Components as any)
        }} />
        <MaterialConfiguration/>
      </MaterialContainerProvider>
    </Layout>
  );
};

export default Example;
