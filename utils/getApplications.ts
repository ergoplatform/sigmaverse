import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export const getApplcations = () => {
  const applicationsDirectory = path.join(process.cwd(), 'applications');
  const applicationsImagesDirectory = path.join(process.cwd(), 'public/images/applications');

  if (!fs.existsSync(applicationsImagesDirectory)) {
    fs.mkdirSync(applicationsImagesDirectory);
  }

  const filenames = fs.readdirSync(applicationsDirectory);

  const applications = filenames
    .filter((filename) => !filename.match('.DS_Store'))
    .map((filename) => {
      const filePath = path.join(applicationsDirectory, filename);

      const { data }: any = matter(fs.readFileSync(`${filePath}/overview.md`, 'utf8'));

      const newLogoPath = `/images/applications/${data.logo_image}`;
      const newPreviewPath = `/images/applications/${data.preview_image}`;

      fs.copyFileSync(
        `${filePath}/${data.logo_image}`,
        `${applicationsImagesDirectory}/${data.logo_image}`,
      );
      fs.copyFileSync(
        `${filePath}/${data.preview_image}`,
        `${applicationsImagesDirectory}/${data.preview_image}`,
      );

      return {
        ...data,
        logo: newLogoPath,
        preview: newPreviewPath,
      };
    });

  return applications;
};
