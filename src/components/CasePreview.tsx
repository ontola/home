import { BlogItemProp } from '../utils/getPosts';

interface CasePreviewProps {
  /** E.g. 'glapp' or 'argu' */
  caseResource: BlogItemProp;
}

export function CasePreview({ caseResource }: CasePreviewProps): JSX.Element {
  const { title } = caseResource.data;

  return (
    <>
      <h1>{title}</h1>
    </>
  );
}
