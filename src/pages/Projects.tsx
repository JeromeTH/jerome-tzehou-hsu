import ProjectCard from '../components/ProjectCard'
import taihu from '../assets/taihu-mdd.svg'
import pltv from '../assets/pltv.jpg'
import smartsearch from '../assets/smartsearch.png'
import wildfin from '../assets/wildfin.png'
import critter from '../assets/critter.png'

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ProjectCard
        image={taihu}
        title="National Library AI Search Engine"
        description="An intelligent search platform built for the Taiwan National Library, integrating semantic retrieval, metadata filtering, and document-level reranking. Designed to handle scholarly archives and offer real-time question answering via LLMs."
        state="Active"
        githubLink="https://github.com/NCL-TAIHU/RAG"
        demoLink={null}
      />

    <ProjectCard
        image={wildfin}
        title="Large-Scale ML Video Model Benchmarking system on Fish Videos in the Wild "
        description="Developing Pytorch equivalent of Google DeepMind Video reader, supporting distributed shard computing in loading and processing large-scale video datasets.
        NeurIPS Datasets and Benchmarks 2025 submission in progress."
        state="Submitted"
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
        state="Paused" 
        githubLink="https://github.com/CornellDataScience/smart-search"
        demoLink={null}
      />

        <ProjectCard
        image={critter}
        title="Critter World Evolution Simulator"
        description="Class project of CS 2112: Honors Object-Oriented Programming. Built the parser and interpreter of a custom critter behavior language in Java, 
        Multithreaded simluator and GUI using the MVC design pattern and JavaFX. Received A+ grade and highest project score in the honors Cornell CS cohort."
        state="Completed. Unable to show code due to Cornell's academic integrity policy." 
        githubLink={null}
        demoLink={null}
      />

      

      <ProjectCard
        image={pltv}
        title="Lifetime Value Prediction for Mobile Advertising"
        description="Independently developed lifetime value prediction feature for mobile advertising startup Bubbleye. Utilized advanced machine learning techniques to predict user lifetime value, enhancing ad targeting and campaign effectiveness."
        state="Completed"
        githubLink={null}
        demoLink={null}
      />
    </div>
  )
}
