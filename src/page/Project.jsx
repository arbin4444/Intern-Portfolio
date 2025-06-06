import React from 'react'
import githubImage from './github.png';
import todolistImage from './todolist.jpg';
import routerImage from './routerr.png';
import fetchAPIImage from './fetchApi.png';
import htmlimage from './html.jpg';
import jsImage from './js.png';
import bookImage from './book.jpg';
import graphQLImage from './graphql.png';
import './Project.css'


export const Project = () => {
  return (
    <div>
        <section id='project' className='project-section'>
            <div className='project-div'>
                <div className='ttl-project'>My Project</div>
                <div className='project-content'>
                    <div className='img-div'>
                    <img className='src-img' src={githubImage} alt="github" />
                        <div className='img-detail'><a href='https://github.com/arbin4444/intern-project-repo.git'>First Intern project</a></div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={jsImage} alt="javascript" />
                        <div className='img-detail'><a href='https://github.com/arbin4444/Intern-NodeJS.git'>Javascript Projects</a></div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={htmlimage} alt="html" />
                        <div className='img-detail'><a href='https://github.com/arbin4444/intern-HTMLProject.git'>HTML Projects</a></div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={routerImage} alt="router" />
                        <div className='img-detail'><a href='https://github.com/arbin4444/Intern-RouterProject.git'>Routes Project</a></div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={todolistImage} alt="todolist" />
                        <div className='img-detail'><a href='https://github.com/arbin4444/Intern-TodolistProject.git'>TodoList Project-React Js</a></div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={fetchAPIImage} alt="fetching" />
                        <div className='img-detail'><a href='https://github.com/arbin4444/Intern-fetchApi.git'>Fetch API Project</a></div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={graphQLImage} alt="graphql" />
                        <div className='img-detail'><a href='https://github.com/arbin4444/Intern-Graphql.git'>GraphQL Project</a></div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={todolistImage} alt="rtkTodolist" />
                        <div className='img-detail'><a href='https://github.com/arbin4444/Intern-ReduxToolkit.git'>TodoList - Redux Toolkit</a></div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={bookImage} alt="book" />
                        <div className='img-detail'><a href='https://github.com/arbin4444/Intern-Final-Project.git'>Book Management Project</a></div>
                        <div className='img-detail'><a href='https://github.com/arbin4444/intern-final-backend.git'>Book Management Backend</a></div>
                    </div>

                </div>
            </div>

        </section>
    </div>
  )
}
