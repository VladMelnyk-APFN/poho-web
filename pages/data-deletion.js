import fs from 'fs';
import path from 'path';
import LegalDoc from '../components/LegalDoc';

export default function DataDeletion({ text }) {
  return <LegalDoc title="Data Deletion Instructions" text={text} />;
}

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'PoHo_Data_Deletion_Instructions.txt');
    const text = fs.readFileSync(filePath, 'utf8');
    return {
      props: { text },
    };
  } catch (e) {
    return {
      props: { text: "Content is currently unavailable." },
    };
  }
}
