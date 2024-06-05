---
sidebar_position: 1
---

# How to create jobs

:::note
To create jobs, you need to have a valid Embloy subscription.
:::

## Automatically create jobs with Quicklink

If you have your own job page and integrated _Embloy Quicklink_, you don't need to worry about job creation as we automatically create an unlisted (only visible to you and applicants using the "Apply with Embloy" Button on your page) job listing on Embloy which you can access and edit just as usual via the job dashboard.

:::tip
Our recommendation is to create a custom job on Embloy first and then embed it into your website using Quicklink.
:::

Read more on this in the [Quicklink documentation](/docs/core/quicklink/quicklink_application).

## Customize jobs

With Embloy you can fully customize your jobs details as well as application requirements.

### Job information

To get an overview of allowed job values, see [this table](./../quicklink/token_customization.md#session-values).

### Application requirements

If you want applicants to answer certain questions, and provide links to their social media profiles or portfolio websites, you can customize this when creating/editing your job.

:::note
Application requirements are not supported yet by Quicklink's automatic job creation. Therefore, to use these, you will have to either manually create / import your job in Embloy or use one of our ATS integrations, and then embed this job on your website.
:::

For any given job, you can create at most 50 application requirements. Allowed application requirements are as follows:

| Field           | Allowed Values                                                                                                                                            | Default Value |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `question_type` | "yes_no", "short_text", "long_text", "link", "number", "single_choice", "multiple_choice", "location", "date", "file"                                     | "yes_no"      |
| `question`      | Any valid string with a maximum length of 500 characters                                                                                                  | -             |
| `required`      | true, false                                                                                                                                               | true          |
| `options`       | An array of at least 1 and at most 50 strings, with each a maximum length of 100 characters (can only be set for single_choice, multiple_choice and file) | -             |

Answers to these questions have to adhere to the allowed values and cannot be longer than 200 characters for answers to "link", "number" and "short_text" and not longer tan 1000 characters for "location" and "long_text" question types.

Answers to questions of type "date" need to be a valid date string (e.g., "2024-12-31 23:42:14.048805000 +0000").

### File attachment

You can choose to require an applicant to attach files to their applications. To enable this feature, set the `question_type` to "file" and specify the permissible file types in the `options` field. If the `options` field is left empty, the system will default to accepting ".pdf" files.

The following is a list of acceptable file types:

- Text files: pdf, doc, docx, txt, rtf, odt
- Image files: jpg, jpeg, png, gif, bmp, tiff, tif, svg
- Video files: mp4, avi, mov, wmv, flv, mkv, webm
- Audio files: ogg, mp3, wav, wma, aac, m4a
- Compressed files: zip, rar, tar, 7z, gz, bz2
- Spreadsheet files: xls, xlsx, ods
- Presentation files: ppt, pptx

## Import external jobs

You can batch-import jobs on the Embloy-Genius [job dashboard](https://genius.embloy.com/recruitment) by clicking on the "upload" icon in the top right corner of the table. Currently, we only support the following formats:

- Embloy Jobs - JSON ([example](/files/embloy-job.json))

- _Coming soon ..._

## Create jobs via the Embloy-dashboard

You can create Embloy-Jobs manually using our job editor which you can find at [genius.embloy.com/jobs/new](https://genius.embloy.com/jobs/new).

## Create jobs manually

If you want to create Embloy-Jobs manually, you can use [this endpoint](https://www.postman.com/embloy/workspace/embloy-workspace/request/24977803-832650d0-f343-4f90-9dec-e5828711156a).

```

```
