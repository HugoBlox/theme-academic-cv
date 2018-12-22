# this function needs to be updated to export better... including links to doi / posters?

bibtex_2academic <- function(bibfile,
                             outfold,
                             abstract = FALSE, 
                             overwrite = FALSE) {
  
  require(RefManageR)
  require(dplyr)
  require(stringr)
  require(anytime)
  
  # Import the bibtex file and convert to data.frame
  mypubs   <- ReadBib(bibfile, check = "warn", .Encoding = "UTF-8") %>%
    as.data.frame()
  
  mypubs$document_type = mypubs$bibtype
  
  # assign "categories" to the different types of publications
  mypubs   <- mypubs %>%
    dplyr::mutate(
      pubtype = dplyr::case_when(document_type == "Article" ~ "2",
                                 document_type == "Article in Press" ~ "2",
                                 document_type == "InProceedings" ~ "1",
                                 document_type == "Proceedings" ~ "1",
                                 document_type == "Conference" ~ "1",
                                 document_type == "Conference Paper" ~ "1",
                                 document_type == "MastersThesis" ~ "3",
                                 document_type == "PhdThesis" ~ "3",
                                 document_type == "Manual" ~ "4",
                                 document_type == "TechReport" ~ "4",
                                 document_type == "Book" ~ "5",
                                 document_type == "InCollection" ~ "6",
                                 document_type == "InBook" ~ "6",
                                 document_type == "Misc" ~ "1",
                                 TRUE ~ "0"))
  
  # create a function which populates the md template based on the info
  # about a publication
  create_md <- function(x) {
    
    # define a date and create filename by appending date and start of title
    if (!is.na(x[["year"]])) {
      x[["date"]] <- paste0(x[["year"]], "-01-01")
    } else {
      x[["date"]] <- "2999-01-01"
    }
    
    filename <- paste(x[["date"]], x[["title"]] %>%
                        str_replace_all(fixed(" "), "_") %>%
                        str_remove_all(fixed(":")) %>%
                        str_sub(1, 20) %>%
                        paste0(".md"), sep = "_")
    # start writing
    if (!file.exists(file.path(outfold, filename)) | overwrite) {
      fileConn <- file.path(outfold, filename)
      write("+++", fileConn)
      
      # Title and date
      write(paste0("title = \"", x[["title"]], "\""), fileConn, append = T)
      write(paste0("date = \"", anydate(x[["date"]]), "\""), fileConn, append = T)
      
      # Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
      auth_hugo <- str_replace_all(x["author"], " and ", "\", \"")
      auth_hugo <- stringi::stri_trans_general(auth_hugo, "latin-ascii")
      write(paste0("authors = [\"", auth_hugo,"\"]"), fileConn, append = T)
      
      # Publication type. Legend:
      # 0 = Uncategorized, 1 = Conference paper, 2 = Journal article
      # 3 = Manuscript, 4 = Report, 5 = Book,  6 = Book section
      write(paste0("publication_types = [\"", x[["pubtype"]],"\"]"), 
            fileConn, append = T)
      
      # Publication details: journal, volume, issue, page numbers and doi link
      publication <- x[["journal"]]
      if (!is.na(x[["volume"]])) publication <- paste0(publication, 
                                                       ", (", x[["volume"]], ")")
      if (!is.na(x[["number"]])) publication <- paste0(publication,
                                                       ", ", x[["number"]])
      if (!is.na(x[["pages"]])) publication <- paste0(publication,
                                                      ", _pp. ", x[["pages"]], "_")
      if (!is.na(x[["doi"]])) publication <- paste0(publication,
                                                    ", ", paste0("https://doi.org/", 
                                                                 x[["doi"]]))
      
      write(paste0("publication = \"", publication,"\""), fileConn, append = T)
      write(paste0("publication_short = \"", publication,"\""),fileConn, append = T)
      
      #if (!is.na(x[["volume"]])) {volume <- x[["volume"]];
      #write(paste0("volume = \"", volume,"\""), fileConn, append = T)}
      
      #if (!is.na(x[["number"]])) {number <- x[["number"]];
      #write(paste0("number = \"", number,"\""), fileConn, append = T)}
      
      #if (!is.na(x[["pages"]])) {pages <- x[["pages"]];
      #write(paste0("pages = \"", pages,"\""), fileConn, append = T)}
      
      #if (!is.na(x[["doi"]])) {doi <- x[["doi"]];
      #write(paste0("doi = \"", doi,"\""), fileConn, append = T)}
      
      # Abstract and optional shortened version.
      if (abstract) {
        write(paste0("abstract = \"", x[["abstract"]],"\""), fileConn, append = T)
      } else {
        write("abstract = \"\"", fileConn, append = T)
      }
      write(paste0("abstract_short = \"","\""), fileConn, append = T)
      
      # other possible fields are kept empty. They can be customized later by 
      # editing the created md
      
      write("image_preview = \"\"", fileConn, append = T)
      #write("selected = false", fileConn, append = T)
      
      ifelse(!is.na(x[["selected"]]), selected <- x[["selected"]], selected<-"false")
      write(paste0("selected = ", selected), fileConn, append = T)
      
      write("projects = []", fileConn, append = T)
      write("tags = []", fileConn, append = T)
      #links
      write("url_pdf = \"\"", fileConn, append = T)
      write("url_preprint = \"\"", fileConn, append = T)
      write("url_code = \"\"", fileConn, append = T)
      write("url_dataset = \"\"", fileConn, append = T)
      write("url_project = \"\"", fileConn, append = T)
      write("url_slides = \"\"", fileConn, append = T)
      write("url_video = \"\"", fileConn, append = T)
      write("url_poster = \"\"", fileConn, append = T)
      write("url_source = \"\"", fileConn, append = T)
      #other stuff
      write("math = true", fileConn, append = T)
      write("highlight = true", fileConn, append = T)
      # Featured image
      write("[header]", fileConn, append = T)
      write("image = \"\"", fileConn, append = T)
      write("caption = \"\"", fileConn, append = T)
      
      write("+++", fileConn, append = T)
    }
  }
  # apply the "create_md" function over the publications list to generate
  # the different "md" files.
  
  apply(mypubs, FUN = function(x) create_md(x), MARGIN = 1)
}

