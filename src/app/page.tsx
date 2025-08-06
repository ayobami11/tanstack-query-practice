import { Posts } from "@/components/posts";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

interface HomeProps {
  searchParams: SearchParams;
}

export default async function Home(props: HomeProps) {

  const searchParams = await props.searchParams;

  return (
    <div className="my-8">
      <Posts searchParams={searchParams} />
    </div>
  );
}
