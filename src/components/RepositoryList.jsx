import { RepositoryItem } from "./RepositoryItem";

const repository = {
  name: "unform",
  description: "Um formulário simples e flexível",
  link: "https://www.github.com/thiagofranchin"
}

export function RepositoryList() {
  return (
    <section className="reposotory-list">
      <h1>Lista de Repositórios</h1>

      <ul>
        <RepositoryItem 
          repository={repository} 
          description={repository}
          link={repository}
        />
        <RepositoryItem 
          repository={repository} 
          description={repository}
          link={repository}
        />
        <RepositoryItem 
          repository={repository} 
          description={repository}
          link={repository}
        />
      </ul>
    </section>
  );
}