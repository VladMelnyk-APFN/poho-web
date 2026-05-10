import fs from 'fs';
import path from 'path';
import LegalDoc from '../components/LegalDoc';

export default function PrivacyPolicy({ text }) {
  return <LegalDoc title="Privacy Policy" text={text} />;
}

export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'PoHo_Privacy_Policy.txt');
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
