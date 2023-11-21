terraform {
    required_providers {
        vercel = {
            source = "vercel/vercel"
            version = "0.16.0"
        }
    }
}

provider "vercel" {
    # Configuration options
    team = "team_892LiHhE5ArWAPexTgw1Q2gu"
}

resource "vercel_project" "javazone-project" {
    name = "2024-javazone-no"
    framework = "astro"
    git_repository = {
        type = "github"
        repo = "javaBin/2024.javazone.no"
    }
}

resource "vercel_project_domain" "javazone-domain" {
    domain     = "2024.javazone.no"
    project_id = vercel_project.javazone-project.id

}
