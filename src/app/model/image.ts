export interface Image {
  id: string;
  content: string;
  type: string;
}

export interface GetUserImagesResponse {
  images: Image[];
}

export interface ImageCreation {
  content: string;
  type: string;
}
