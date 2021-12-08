import { styled } from '../../stitches.config';
import { MetaData } from '../utils/getPosts';

const Detail = styled('div', {
  color: '$text1',
});

export function Details(data: MetaData) {
  return (
    <Detail>
      {new Date(data.date).toLocaleDateString()} - {data.author}
    </Detail>
  );
}
