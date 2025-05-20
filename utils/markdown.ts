import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'contnet');

export interface ServiceContent {
  contentHtml: string;
  introduction: string;
  offerings: Array<{
    title: string;
    description: string;
  }>;
  benefits: string[];
  approach: string[];
  advantages: string[];
  industries: string[];
}

export async function getServiceContent(filename: string): Promise<ServiceContent | null> {
  try {
    const fullPath = path.join(contentDirectory, `${filename}.md`);
    
    // Check if file exists
    if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      return null;
    }
    
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the markdown metadata and content
    const { content } = matter(fileContents);
    
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(content);
    
    const contentHtml = processedContent.toString();
    
    // Extract introduction from the content (assuming first paragraph after "## Introduction")
    const introductionMatch = content.match(/## Introduction\s+(.*?)(?=##|$)/s);
    const introduction = introductionMatch ? introductionMatch[1].trim() : '';
    
    // Extract offerings from the content (assuming list after "## What We Offer")
    const offeringsMatch = content.match(/## What We Offer\s+(.*?)(?=##|$)/s);
    const offeringsList = offeringsMatch ? offeringsMatch[1].trim() : '';
    
    // Parse bullet points from offerings section
    const offerings = offeringsList
      .split('\n')
      .filter(line => line.trim().startsWith('- **'))
      .map(line => {
        const titleMatch = line.match(/\*\*(.*?)\*\*/);
        const title = titleMatch ? titleMatch[1] : '';
        const description = line.replace(/- \*\*(.*?)\*\*: /, '').trim();
        return { title, description };
      });
    
    // Extract benefits from the content
    const benefitsMatch = content.match(/## Benefits for Your Business\s+(.*?)(?=##|$)/s);
    const benefitsList = benefitsMatch ? benefitsMatch[1].trim() : '';
    
    // Parse numbered points from benefits section
    const benefits = benefitsList
      .split('\n')
      .filter(line => /^\d+\.\s+\*\*/.test(line))
      .map(line => {
        return line.replace(/^\d+\.\s+\*\*(.*?)\*\*: /, '').trim();
      });
    
    // Extract approach steps from the content
    const approachMatch = content.match(/## Our Approach\s+(.*?)(?=##|$)/s);
    const approachList = approachMatch ? approachMatch[1].trim() : '';
    
    // Parse numbered points from approach section
    const approach = approachList
      .split('\n')
      .filter(line => /^\d+\.\s+\*\*/.test(line))
      .map(line => {
        return line.replace(/^\d+\.\s+\*\*(.*?)\*\*: /, '').trim();
      });
    
    // Extract advantages from the content if available
    const advantagesMatch = content.match(/## Why Choose Us\s+(.*?)(?=##|$)/s);
    const advantagesList = advantagesMatch ? advantagesMatch[1].trim() : '';
    
    // Parse bullet points from advantages section
    const advantages = advantagesList
      .split('\n')
      .filter(line => line.trim().startsWith('- **'))
      .map(line => line.replace(/- \*\*(.*?)\*\*: /, '').trim());
    
    // Extract industries we serve
    const industriesMatch = content.match(/## Industries We Serve\s+(.*?)(?=##|$)/s);
    const industriesList = industriesMatch ? industriesMatch[1].trim() : '';
    
    // Parse bullet points from industries section
    const industries = industriesList
      .split('\n')
      .filter(line => line.trim().startsWith('- '))
      .map(line => line.replace(/- /, '').trim());
    
    return {
      contentHtml,
      introduction,
      offerings,
      benefits,
      approach,
      advantages,
      industries
    };
  } catch (error) {
    console.error(`Error processing markdown for ${filename}:`, error);
    return null;
  }
}

export function getAvailableServices(): string[] {
  try {
    return fs.readdirSync(contentDirectory)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace(/\.md$/, ''));
  } catch (error) {
    console.error('Error reading service files:', error);
    return [];
  }
}
