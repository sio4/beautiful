{{/*

run `HUGO_OUTPUTS_HOME=markdown hugo build` to generate public/index.md

*/}}
{{- range site.RegularPages }}
{{- printf "[%v]:{{< relref \"%v\" >}}" .LinkTitle .Path }}
{{ end -}}
