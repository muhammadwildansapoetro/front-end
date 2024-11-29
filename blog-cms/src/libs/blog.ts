import resolveResponse from "contentful-resolve-response"

const base_url = process.env.CONTENTFUL_BASE_URL
const spaces_id = process.env.CONTENTFUL_SPACES_ID
const token = process.env.CONTENTFUL_TOKEN

export const getBlogs = async () => {
    const res = await fetch(
        `${base_url}/spaces/${spaces_id}/environments/master/entries?access_token=${token}&content_type=blog`,
        { next: { revalidate: 60 } })
    const data = await res.json();
    const result = resolveResponse(data)

    return result
}

export const getBlogSlug = async (slug: string) => {
    const res = await fetch(
        `${base_url}/spaces/${spaces_id}/environments/master/entries?access_token=${token}&content_type=blog&fields.slug=${slug}`,
        { next: { revalidate: 60 } })
    const data = await res.json();
    const result = resolveResponse(data)
    return result[0];
}