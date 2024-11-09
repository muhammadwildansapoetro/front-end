import { Document } from "@contentful/rich-text-types";

export interface IProduct {
    fields: {
        name: string;
        slug: string;
        tagline: string;
        description: Document;
        image: {
            fields: {
                file: {
                    url: string;
                };
            };
        };
    };
}