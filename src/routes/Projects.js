import React from 'react'

function Projects() {
  return (
	<div class="pt-16 pl-4 pr-4 md:pl-72 md:pt-24 md:w-full min-h-screen">
		<div class="breadcrumb-navigation mb-6">
			<ul class="flex">
				<li><a href="/">WebDev HQ</a></li>
				<li><a href="/">Todos</a></li>
			</ul>
		</div>
		<main class="md:w-full">
			<div class="grid grid-cols-6 gap-4">
				<div className="bg-white rounded">
				<h2>Projekte</h2>
				<ul>
					<li><a href="/">ListItem</a></li>
				</ul>
				</div>
				<div className="bg-white rounded">
				<h2>Todos</h2>
				<ul>
					<li><a href="/">ListItem</a></li>
				</ul>
				</div>
				<div className="bg-white rounded">
					<h2>Todos</h2>
					<ul>
						<li><a href="/">ListItem</a></li>
					</ul>
				</div>
			</div>
		</main>
	</div>
  )
}

export default Projects