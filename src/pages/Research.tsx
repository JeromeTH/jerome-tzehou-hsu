import ResearchCard from '../components/ResearchCard'
import covidAggressionImage from '../assets/covid-aggression.png'

export default function Research() {
  return (
    <div>
      <h2>Research</h2>
      <ResearchCard
        image={covidAggressionImage}
        title="Increased Online Aggression During COVID-19 Lockdowns: Two-Stage Study of Deep Text Mining and Difference-in-Differences Analysis"
        venue="Journal of Medical Internet Research, 2022"
        authors="Jerome Tze-Hou Hsu, Richard Tzong-Han Tsai"
        paperLink="https://www.jmir.org/2022/8/e38776" // replace if needed
        codeLink="https://github.com/JeromeTH/Increased-Online-Aggression-During-COVID-19-Lockdowns" // replace with actual repo
      />
    </div>
  )
}
