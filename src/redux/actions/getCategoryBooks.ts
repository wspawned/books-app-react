import { createAsyncThunk } from "@reduxjs/toolkit";
import { googleAPI } from "../../api/googleAPI";



export const getCategoryBooks = createAsyncThunk(
  "category-books/get",
  async ({paramsCategory, paramsPage, maxResults }:{paramsCategory:string, paramsPage:number, maxResults : number}) => {
    const res = await googleAPI.get(``, {
      params: {
        q : `subject:${paramsCategory}`,
        startIndex : (paramsPage-1)*15,
        maxResults : maxResults,
      },
    });
    return res.data;
  }
);


export interface CategoryBooksType {
  kind: string;
  totalItems: number;
  items: ListBookType[];
}

export interface ListBookType {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
  accessInfo: AccessInfo;
}

interface AccessInfo {
  country: string;
  viewability: string;
  embeddable: boolean;
  publicDomain: boolean;
  textToSpeechPermission: string;
  epub: Epub;
  pdf: Epub;
  webReaderLink: string;
  accessViewStatus: string;
  quoteSharingAllowed: boolean;
}

interface Epub {
  isAvailable: boolean;
  acsTokenLink?: string;
}

interface SaleInfo {
  country: string;
  saleability: string;
  isEbook: boolean;
  listPrice?: ListPrice;
  retailPrice?: ListPrice;
  buyLink?: string;
  offers?: Offer[];
}

interface Offer {
  finskyOfferType: number;
  listPrice: ListPrice2;
  retailPrice: ListPrice2;
}

interface ListPrice2 {
  amountInMicros: number;
  currencyCode: string;
}

interface ListPrice {
  amount: number;
  currencyCode: string;
}

interface VolumeInfo {
  title: string;
  authors: string[];
  publisher: string;
  publishedDate?: string;
  description: string;
  industryIdentifiers?: IndustryIdentifier[];
  readingModes: ReadingModes;
  pageCount: number;
  printType: string;
  categories: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating: string;
  allowAnonLogging: boolean;
  contentVersion: string;
  panelizationSummary: PanelizationSummary;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  subtitle?: string;
}

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface PanelizationSummary {
  containsEpubBubbles: boolean;
  containsImageBubbles: boolean;
}

interface ReadingModes {
  text: boolean;
  image: boolean;
}

interface IndustryIdentifier {
  type: string;
  identifier: string;
}