// Vendor
import chalk from 'chalk'

// Types
import {Document, Project, Revision} from '../../types/project'

export default class ProjectStatsFormatter {
  private readonly project: Project

  constructor(project: Project) {
    this.project = project
  }

  public log() {
    const translationsCount = this.project.revisions.reduce(
      (memo, revision: Revision) => memo + revision.translationsCount,
      0
    )
    const conflictsCount = this.project.revisions.reduce(
      (memo, revision: Revision) => memo + revision.conflictsCount,
      0
    )
    const reviewedCount = this.project.revisions.reduce(
      (memo, revision: Revision) => memo + revision.reviewedCount,
      0
    )

    console.log(chalk.bold('=== Stats'), chalk.bold.white(this.project.name))

    console.log('')

    console.log(chalk.bold('=== Last synced'))
    console.log(chalk.white.bold(this.project.lastSyncedAt))

    console.log('')

    console.log(chalk.bold('=== Master language'))
    console.log(chalk.white.bold(this.project.language.name))

    console.log('')

    if (this.project.revisions.length > 1) {
      console.log(
        chalk.bold(`=== Translations (${this.project.revisions.length - 1})`)
      )
      this.project.revisions.forEach((revision: Revision) => {
        if (this.project.language.id !== revision.language.id) {
          console.log(chalk.white.bold(revision.language.name))
          console.log('')
        }
      })
    }

    console.log(chalk.bold('=== Documents'))
    this.project.documents.entries.forEach((document: Document) => {
      console.log(chalk.gray('Format:'), chalk.white.bold(document.format))
      console.log(chalk.gray('Path:'), chalk.white.bold(document.path))
      console.log('')
    })

    console.log(chalk.bold('=== Strings'))
    console.log(chalk.white('# Strings:'), chalk.white(`${translationsCount}`))
    console.log(chalk.green('✓ Reviewed:'), chalk.green(`${reviewedCount}`))
    console.log(chalk.red('× In review:'), chalk.red(`${conflictsCount}`))
  }
}
