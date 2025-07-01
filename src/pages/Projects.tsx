import ProjectCard from '../components/ProjectCard'
import taihu from '../assets/taihu-mdd.svg'
import pltv from '../assets/pltv.jpg'
import smartsearch from '../assets/smartsearch.png'
import wildfin from '../assets/wildfin.png'

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <ProjectCard
        image={taihu}
        title="National Library AI Search Engine"
        description="An intelligent search platform built for the Taiwan National Library, integrating semantic retrieval, metadata filtering, and document-level reranking. Designed to handle scholarly archives and offer real-time question answering via LLMs."
        progress="Hybrid retrieval and reranking core deployed. User interface and advanced benchmark generation in progress."
        githubLink="https://github.com/NCL-TAIHU/RAG"
        demoLink={null}
      />

    <ProjectCard
        image={wildfin}
        title="Large-Scale ML Video Model Benchmarking system on Fish Videos in the Wild "
        description="Developing Pytorch equivalent of Google DeepMind Video reader, supporting distributed shard computing in loading and processing large-scale video datasets.
        NeurIPS Datasets and Benchmarks 2025 submission in progress."
        progress="Under Submission, Releasing soon."
        githubLink={null}
        demoLink={null}
      />
      

      <ProjectCard
        image={smartsearch}
        title="CDS SmartSearch"
        description="Project lead in the development of a smart search engine for Cornell Data Science Project Team. 
        Systems aims to help current and prospective members understand the team's historical codebases. 
        It performs a context-aware traversal of the codebase, deconstructs the code using abstract syntax trees, 
        and embeds the code into a vector database for semantic search."
        progress="Under development" 
        githubLink="https://github.com/CornellDataScience/smart-search"
        demoLink={null}
      />

      <ProjectCard
        image={pltv}
        title="Lifetime Value Prediction for Mobile Advertising"
        description="Independently developed lifetime value prediction feature for mobile advertising startup Bubbleye. Utilized advanced machine learning techniques to predict user lifetime value, enhancing ad targeting and campaign effectiveness."
        progress="Completed during internship at Bubbleye. Currently in production use."
        githubLink={null}
        demoLink={null}
      />
    </div>
  )
}
