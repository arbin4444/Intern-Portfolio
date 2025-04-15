import React from 'react'
import githubImage from './github.png';
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
                        <div className='img-detail'><a href='https://github.com/arbin4444/intern-project-repo.git'>My first intern project</a></div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={githubImage} alt="github" />
                        <div className='img-detail'>My first intern project</div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={githubImage} alt="github" />
                        <div className='img-detail'>My first intern project</div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={githubImage} alt="github" />
                        <div className='img-detail'>My first intern project</div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={githubImage} alt="github" />
                        <div className='img-detail'>My first intern project</div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={githubImage} alt="github" />
                        <div className='img-detail'>My first intern project</div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={githubImage} alt="github" />
                        <div className='img-detail'>My first intern project</div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={githubImage} alt="github" />
                        <div className='img-detail'>My first intern project</div>
                    </div>
                    <div className='img-div'>
                    <img className='src-img' src={githubImage} alt="github" />
                        <div className='img-detail'>My first intern project</div>
                    </div>

                </div>
            </div>

        </section>
    </div>
  )
}
