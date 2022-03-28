import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getCarouselItems = () => {
  const carouselItemsDirectory = path.join(process.cwd(), 'carousel');
  const carouselItemsImagesDirectory = path.join(process.cwd(), 'public/images/carousel');

  if (!fs.existsSync(carouselItemsImagesDirectory)) {
    fs.mkdirSync(carouselItemsImagesDirectory);
  }

  const filenames = fs.readdirSync(carouselItemsDirectory);

  const carouselItems = filenames
    .filter((filename) => !filename.match('.DS_Store'))
    .map((filename) => {
      const filePath = path.join(carouselItemsDirectory, filename);

      const { data }: any = matter(fs.readFileSync(`${filePath}`, 'utf8'));

      const newLogoPath = `/images/carousel/${data.logo_image}`;
      const newPreviewPath = `/images/carousel/${data.preview_image}`;

      return {
        ...data,
        logo: newLogoPath,
        preview: newPreviewPath,
      };
    });

  return carouselItems;
};
