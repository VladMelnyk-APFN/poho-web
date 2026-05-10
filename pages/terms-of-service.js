import fs from 'fs';
import path from 'path';
import LegalDoc from '../components/LegalDoc';

export default function TermsOfService({ text }) {
  return <LegalDoc title="Terms of Service" text={text} />;
}

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'PoHo_Terms_of_Service.txt');
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
