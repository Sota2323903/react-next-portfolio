import { createClient } from "microcms-js-sdk";
import type {
  MicroCMSQueries,
  MicroCMSImage,
  MicroCMSListContent,
} from "microcms-js-sdk";

export type Dream = {
  title: string;
  description: string;
  content: string;
  image?: MicroCMSImage;
} & MicroCMSListContent;

export type Profile = {
  title: string;
  name?: string;
  introduction?: string;
  content?: string;
  image?: MicroCMSImage;
} & MicroCMSListContent;

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error("MICROCMS_API_KEY is required");
}

const client = createClient({
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

// 夢コンテンツの取得
export const getDreamList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Dream>({
    endpoint: "dream",
    queries,
  });
  return listData;
};

export const getDreamDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Dream>({
    endpoint: "dream",
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return detailData;
};

// 自己紹介コンテンツの取得
export const getProfileList = async (queries?: MicroCMSQueries) => {
  const listData = await client.getList<Profile>({
    endpoint: "profile",
    queries,
  });
  return listData;
};

export const getProfileDetail = async (
  contentId: string,
  queries?: MicroCMSQueries
) => {
  const detailData = await client.getListDetail<Profile>({
    endpoint: "profile",
    contentId,
    queries,
    customRequestInit: {
      next: {
        revalidate: queries?.draftKey === undefined ? 60 : 0,
      },
    },
  });
  return detailData;
};
